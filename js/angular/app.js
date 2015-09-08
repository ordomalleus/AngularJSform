//генерация писемь
function makeEmail() {
    var strValues="abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i=0;i<8;i++) {
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j=0;j<4;j++) {
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".ru"
    return strEmail;
}

//проверка валидации email
function validateEmail(elementValue){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}


(function(){
    var emailApp = angular.module('emailApp', []);

    emailApp.controller('emailController', function($scope) {

        $scope.emailAll = [];

        $scope.addMail = function() {
            //console.log(event.which);
            if((event.which === 13) || (event.which === 44)) {

                var errorEmail = validateEmail($scope.mailText);

                $scope.emailAll.push({text:$scope.mailText, errorMail:errorEmail});
                $scope.mailText = '';
            }
        };

        $scope.closeMail = function(index) {
            $scope.emailAll.splice(index, 1);
        };

        $scope.addEmails = function() {
            var random = makeEmail();
            $scope.emailAll.push({text:random, errorMail:true});
        };

        $scope.show = false;
        $scope.getEmailsCount = function() {
            $scope.test = $scope.emailAll;
            $scope.show = true;
            //console.log($scope.show);
        };

    });

})();
