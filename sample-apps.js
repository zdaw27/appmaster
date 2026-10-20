'use strict';
const allowed=["shop","booking","chat","dashboard","community","brand","planner","fitness","learning","restaurant","salon","clinic","academy","property","estimate","inventory"];
const requested=new URLSearchParams(location.search).get('app');
location.replace('static/'+(allowed.includes(requested)?requested:'shop')+'.html');
