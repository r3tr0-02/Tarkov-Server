const utility = require('../../../core/util/utility');
const { AccountServer } = require('../../classes/account');
const { AccountController } = require('./../../Controllers/AccountController');



class FriendRequest {
    /**
     * 
     * @param {*} id 
     * @param {*} from 
     * @param {*} to 
     * @param {*} date 
     * @param {*} profile 
     */
    constructor(id, from, to, date, profile) {

        this._id = utility.generateNewId();
        if(id)
            this._id = id;
        /** 
         * AccountId
         */
        this.from = "";
        if(from)
            this.from = from;
        /** 
         * AccountId
         */
        this.to = "";
        if(to)
            this.to = to;

        this.date = new Date().getTime();
        if(date) {
            this.date = date;
        }
        /** 
         * AccountId
         */
        this.profile = "";
        if(profile)
            this.profile = profile;
    }

    /**
     * 
     * @param {number} friendRequestId 
     * @returns 
     */
    toFriendRequestResponse(friendRequestId) {
        if(!friendRequestId)
            friendRequestId = utility.generateNewId();

        var acc = AccountServer.find(this.from);
		var toAcc = AccountServer.find(this.to);

		// console.log("from");
		// console.log(acc);
		// console.log("to");
		// console.log(toAcc);

        return new FriendRequestResponse(friendRequestId, acc, toAcc, new Date().getTime(), acc);
    }

}

class FriendRequestResponse {
    /**
     * 
     * @param {*} id 
     * @param {*} from 
     * @param {*} to 
     * @param {*} date 
     * @param {*} profile 
     */
    constructor(id, from, to, date, profile) {

        this._id = utility.generateNewId();
        if(id)
            this._id = id;
        /** 
         * UpdatableChatMember
         */
        this.from = {};
        if(from)
            this.from = from;
        /** 
         * UpdatableChatMember
         */
        this.to = {};
        if(to)
            this.to = to;

        this.date = new Date().getTime();
        if(date) {
            this.date = date;
        }
        /** 
         * UpdatableChatMember
         */
        this.profile = {};
        if(profile)
            this.profile = profile;
    }

    /**
     * 
     * @param {FriendRequest} friendRequest 
     */
    static fromFriendRequest(friendRequest) {
      


        return friendRequest.toFriendRequestResponse();
    }
}

module.exports.FriendRequest = FriendRequest;
module.exports.FriendRequestResponse = FriendRequestResponse;