class BaseObject {
	constructor(props) {}

	copy(object) {
		for (let key in this) {
			if (object[key]) {
				this[key] = object[key];
			}
		}
	}
}

export default BaseObject;
