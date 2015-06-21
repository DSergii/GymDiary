;(function(){
'use strict'

	angular
		.module('GymDiary.gymfirebase.srv', ['firebase'])
		.service('gymfirebase', gymfirebase);


	gymfirebase.$inject = ['FIREBASE_URL', '$firebaseObject', '$firebaseArray'];


	function gymfirebase(FIREBASE_URL, $firebaseObject, $firebaseArray){

		var dbData = this;

		/* подключение к БД */
		var ref = new Firebase(FIREBASE_URL);

		/* получение объекта из БД */
		var refObj = $firebaseObject(ref);

		/* получение массива из объекта БД */
		var refArr = $firebaseArray(ref);

		/*вернет только пользователей, все равно, что добавить users в конец url ->  https://gymjournal.firebaseio.com/users */
		var usersRef = ref.child('users');

		var usersArr = $firebaseArray(usersRef);

		this.getUsers = function(){
			return usersArr.$loaded(function(_data){
				return _data;
			});
		};

		this.addUser = function(_user){
			usersRef.push(_user);
		};

		/* callback функция, возвращающая через промис объект из БД 
		(можно обойтись без нее, но она нужна для синхронной загрузки) */
		refObj.$loaded(function() {
			dbData.dbObj = refObj;
		});

		/* тот же callback только в виде массива */
		refArr.$loaded(function(){
			dbData.dbArr = refArr;
		});

	}


})();