
class PassiveSkill {

	constructor(role, event) {
		this.role = role;
		this.event = event;
	}

	triggerable(target) {
		return target && target.state.role == this.role;
	}

	effect(room, target) {
		return false;
	}

}

export default PassiveSkill;
