package com.subtitlescorrector.util;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import org.apache.commons.io.input.BufferedFileChannelInputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.common.io.Files;
import com.subtitlescorrector.applicationproperties.ApplicationProperties;

@Component
public class Util {

	private static final Logger log = LoggerFactory.getLogger(Util.class);
	
	@Autowired
	ApplicationProperties properties;
	
	public static String getCurrentTimestampAsString() {
		return LocalDateTime.now().format(DateTimeFormatter.ofPattern("ddMMyyyyHHmmssSSS"));
	}

	public static Map<String, String> loadPropertiesFileIntoMap(InputStream is) {

		File file = inputStreamToFile(is);
		
		Map<String, String> propsMap = new HashMap<String, String>();

		Scanner scanner = null;
		
		try {
			scanner = new Scanner(file);
		} catch (FileNotFoundException e) {
			log.error("Error loading properties into map!", e);
		}

		if (scanner != null) {

			while (scanner.hasNextLine()) {

				String line = scanner.nextLine();
				String keyVal[] = line.split("=");
				if (keyVal.length == 2 && isNotBlank(keyVal[0]) && !keyVal[0].startsWith("#")) {
					propsMap.put(keyVal[0], keyVal[1]);
				} else if (isNotBlank(keyVal[0]) && !keyVal[0].startsWith("#")) {
					log.error("Error parsing key-value pair: " + line + ". It will be skipped.");
				}

			}

		}

		scanner.close();
		
		file.delete();
		return propsMap;
	}
	
	public static File inputStreamToFile(InputStream inputStream) {
		
		File file = new File("temp" + getCurrentTimestampAsString() + ".properties");
		try(BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(file))){
			
			byte[] buffer = new byte[1024];
            int bytesRead;

            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
			
		}catch(Exception e) {
			log.error("Error writing input stream to file!");
		}
		return file;
	}

	public static boolean isBlank(CharSequence cs) {

		int strLen;
		if (cs != null && (strLen = cs.length()) != 0) {
			for (int i = 0; i < strLen; ++i) {
				if (!Character.isWhitespace(cs.charAt(i))) {
					return false;
				}
			}

			return true;
		} else {
			return true;
		}
	}

	public static boolean isNotBlank(CharSequence cs) {
		return !isBlank(cs);
	}

	//NON-STATIC method!
	public String makeFilenameForDownloadFromS3Key(String s3Key) {
		return properties.getSubtitleCorrectionProcessedFileNamePrefix() + s3Key.substring(s3Key.indexOf('_') + 1);
	}

}
