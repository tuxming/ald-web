'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */

var webroot = '';

var menu = {
  unloign:{
    index: webroot + "/index.html"
  },
  login:{
    freelancer: {
      findwork:{
        label: "找工作",
        url: webroot+"/d/",
        active: true,
        submenu:[
          {label:"找工作", url: webroot+"/d/#/"},
          {label:"我的收藏", url: webroot+"/d/#/saved"},
          {label:"建议", url: webroot+"/d/#/proposals"},
          {label:"个人资料", url: webroot+"/d/#/myprofile"},
          {label:"My Stats", url: webroot+"/d/#/myreport"},
          {label: "资质测试", url: webroot+"/d/#/tests"}
        ]
      },
      myjobs:{
        label: "我的工作",
        url: webroot+"/d/myjobs/myjobs.html",
        submenu:[
          {label:"我的工作", url: webroot+"/d/myjobs/myjobs.html"},
          {label:"我的合同", url: webroot+"/d/myjobs/contracts.html"},
          {label:"工作日志", url: webroot+"/d/myjobs/workdiary.html"}
        ]
      },
      reports:{
        label: "报表",
        url: webroot+"/d/report.html"
      },
      messages:{
        label: "消息",
        url: webroot+"/usual/messages.html"
      }
    },
    client:{
      jobs:{
        label: "工作",
        url: webroot+"/e/#/myjobs",
        active: true,
        submenu:[
          {label:"我的工作", url: webroot+"/e/#/myjobs"},
          {label:"我的合同", url: webroot+"/e/contract"},
          {label:"发布工作", url: webroot + "/e/#/jobs/new"}
        ]
      },
      freelancers:{
        label: "自由工作者",
        url: webroot + "/e/#/my-contractors",
        method: "load",
        submenu:[
          {label:"我的员工", url: webroot +"/e/#/my-contractors" },
          { label: "找员工", url: webroot +"/e/#/freelancers/find" },
          { label: "工作日志", url: webroot +"/e/#/freelancers/workdiary" },
          {label:"邀请员工", url: webroot +"/e/#/byo" }
        ]
      },
      reports:{
        label: "报表",
        method: "load",
        url: webroot+"/e/report/contract_hourly.html",
        submenu:[
          {label:"固定工资", url: webroot+"/e/report/contract_fixedprice.html"}
        ]
      },
      messages:{
        label: "消息",
        url: webroot+"/usual/messages.html"
      }
    },
    agency:{
      reports:{
        label: "报表",
        url: webroot+"/reports/main.html"
      },
      messages:{
        label: "消息",
        url: webroot+"/usual/messages.html"
      }
    }
  }
};

var app = angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-storage',
    'ui.bootstrap'
  ]);

app.config(function(storeProvider){
  storeProvider.setStore('sessionStorage');
});

app.controller("parentCtrl", function($scope, store, $window){
  //store.remove("menu");

  $scope.goto = function(type, url){

    if(type=='d'){
      var mymenu = menu.login.freelancer;
      mymenu.findwork.active = true;
      store.set("menu", mymenu);
    }else if(type=='e'){
      var mymenu = menu.login.client;
      mymenu.jobs.active = true;
      store.set("menu", mymenu);
    }else if(type=='a'){
      var mymenu = menu.login.agency;
      store.set("menu", mymenu);
    }
    $window.location.href = webroot + url;

  }

});

//重构菜单
app.directive("loginNav", function(){
  return {
    restrict: "EA",
    replace: true,
    templateUrl: webroot+"/directive/header.div.html",
    controller: function($scope, $element, $attrs, $transclude, store, $window, $location){
      var mymenu = store.get("menu");  //menu.login
      console.log(mymenu);
      //if(!mymenu){
      //  $scope.menu = menu.login.freelancer;
        //$scope.menu.findwork.active = true;

      //}else{
      //  $scope.menu = mymenu;
      //}

      $scope.menu = mymenu;

      //$scope.menu = menu.login.freelancer;
      //$scope.menu.findwork.active = true;

      for(var index in $scope.menu){
        var menuItem = $scope.menu[index];
        if(menuItem.active){
          $scope.submenu =  menuItem.submenu;
          break;
        }
      }

      $scope.isSubmenu = function(){
        if($scope.submenu){
          return $scope.submenu.length>0
        }
        return false;
      };

      $scope.goto = function(index, url){

        if(!url)
          return;

        var inKey = "";
        var i = 0;
        var currItem;
        for(var key in $scope.menu){
          if(i==index){

            inKey = key;
            currItem = $scope.menu[key];
          }
          $scope.menu[key].active = false;
          i++;
        }

        $scope.menu[inKey].active = true;
        $scope.submenu = $scope.menu[inKey].submenu;

        store.set("menu", $scope.menu);

          $location.path(url);

        window.location.href = url;
        window.location.reload();
        //return url;
      };

      $scope.switchToFreelancer = function(){
        var mymenu = menu.login.freelancer;
        mymenu.findwork.active = true;
        store.set("menu", mymenu);

        $window.location.href = mymenu.findwork.url;

      };
      $scope.switchToClient = function(){
        var mymenu = menu.login.client;
        mymenu.jobs.active = true;
        store.set("menu", mymenu);
        $window.location.href = mymenu.jobs.url;
      };

      $scope.switchToAgency = function(){
        var mymenu = menu.login.agency;
        store.set("menu", mymenu);
        $window.location.href = mymenu.reports.url;
      };

      $scope.logout = function(){
        store.remove(menu);
        $window.location.href = menu.unloign.index;
      };

    }
  };
});



/***
 * var plugin = angular.module('app',[]);
 * <a href='javascript:;' ctxmenu='[]'/>
 * [
 *  {type: 'html', 'html':"<i class='iconfont'>&#xe60e;</i><a href='#' ng-click='cccc'>dfa</a"},
 *  {text: 'Add', funcName: "funcName"},
 *  {text: 'Remove', funcName: "funcName"}
 * ]
 */
/*
plugin.directive('ctxmenu', [],
  function(){
    return {



    }
  }
);
*/


