package com.sensemaya.medicapp.common;

public class CommonResponse {

	private boolean success;
	private String message;
	private Object result;
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public static CommonResponse responseDummy(){
		CommonResponse response = new CommonResponse();
		return response;
	}
	public Object getResult() {
		return result;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	
}
