var app=angular.module('myApp',[]);


app.controller('tableController',function($scope){
    $scope.searchBy='';
   

    $scope.language=[
         {name:'C#',likes:0,dislikes:0, },
         {name:'Java',likes:0,dislikes:0, },
         {name:'Javascript',likes:0,dislikes:0, },
         {name:'Javascript',likes:0,dislikes:0, }
        ] 
        $scope.limitRows=$scope.language.length;
        $scope.newLanguage='';

        $scope.likeLanguage=function(lang){
            lang.likes++;
   
        }

        $scope.dislikeLanguage=function(lang){
            lang.dislikes++;
            
        }

        $scope.deleteLanguage=function(index){
            $scope.language.splice(index,1)

        }

        $scope.saveLang=function(){
            $scope.language.push({name:$scope.newLanguage,likes:0,dislikes:0, })
            $scope.limitRows=$scope.language.length;
            $scope.newLanguage='';
        }

})