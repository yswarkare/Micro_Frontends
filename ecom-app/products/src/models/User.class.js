import BaseObject from "./BaseObject.class";

class User extends BaseObject {
	constructor(id, firstName, lastName, username, emailId, phoneNumber) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
	}
}

export default User;
