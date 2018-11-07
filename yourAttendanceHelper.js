({
	isSetYourTime : function(component) {
        var action = component.get("c.isSetMyAttendance");
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log("state: " + state);
            if (state === "SUCCESS") {
                component.set("v.showOrHide", response.getReturnValue());
			//ここまで state success
            }
            else {
                console.log("Failed with state?: " + state);
            }
        });        
        // Send action off to be executed
        $A.enqueueAction(action); 
		console.log("action: " + action);    
	},
	updateAttendance_helper : function(component) {//出勤打刻
		var save_action = component.get("c.getInsertAttendance");
        //console.log('showhideのhelper ' + showOrHide);
        /*
         * var dataJSON = [{
            empId : showOrHide[3],
            yearMonth : showOrHide[4],
            startDate : showOrHide[5],
            lastModifiedDate : showOrHide[6],
            stdStartTime : showOrHide[7],
            stdEndTime : showOrHide[8],
            empToday : showOrHide[9]
        }];
		//JSONにしてStringで渡さないと受け取ってもらえない。Apex側でdeserializeする        
        save_action.setParams({
            "paramsJSON": JSON.stringify(dataJSON),
        });        
        console.log('paramsJSON ' + JSON.stringify(dataJSON));
        */

        save_action.setCallback(this, function(response) {
            var state = response.getState();
            console.log("state: " + state);
            if (state === "SUCCESS") {
                component.set("v.attendanceString", response.getReturnValue());
			//ここまで state success
            }
            else {
                console.log("出勤ボタンエラー: " + state);
            }
        });        
        // Send action off to be executed
        $A.enqueueAction(save_action);
    },
})
