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
  login:{
    freelancer: {
      findwork:{
        label: "找工作",
        url: webroot+"/d/",
        submenu:[
          {label:"找工作", url: webroot+"/d/#/"},
          {label:"我的收藏", url: webroot+"/d/saved"},
          {label:"建议", url: webroot+"/d/proposals"},
          {label:"个人资料", url: webroot+"/d/myprofile"},
          {label:"My Stats", url: webroot+"/d/myreport"},
          {label: "资质测试", url: webroot+"/d/tests"}
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
        url: "javascriptL:;"
      }
    },
    client:{
      jobs:{
        label: "工作",
        url: webroot+"/e",
        submenu:[
          {label:"我的工作", url: webroot+"/e"},
          {label:"我的合同", url: webroot+"/e/contracts.html"},
          {label:"发布工作", url: "javascript:;"}
        ]
      },
      freelancers:{
        label: "自由工作者",
        url: "javascript:;",
        submenu:[
          {label:"我的员工", url: "javascript:;"},
          {label:"找员工", url: "javascript:;"},
          {label:"邀请员工", url: "javascript:;"}
        ]
      },
      reports:{
        label: "报表",
        url: webroot+"/e/#/report/contract_hourly"
      },
      messages:{
        label: "消息",
        url: "javascript:;"
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
    'ngTouch'
  ]);
