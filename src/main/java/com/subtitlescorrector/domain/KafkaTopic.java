package com.subtitlescorrector.domain;

public enum KafkaTopic {

	SUBTITLE_CORRECTIONS("subtitle_corrections");

	String topicName;
	
	KafkaTopic(String topicName) {
		this.topicName = topicName;
	}
	
	public String getTopicName() {
		return this.topicName;
	}
	
}