(function(h){var p=window.AmazonUIPageJS||window.P,u=p._namespace||p.attributeErrors,a=u?u("AskAuiAssets"):p;a.guardFatal?a.guardFatal(h)(a,window):a.execute(function(){h(a,window)})})(function(h,p,u){h.when("jQuery","ready").execute(function(a){a("body").delegate(".askInlineWidget .cdShowLess, .askInlineWidget .cdReadMore","click touchstart",function(b){b.preventDefault();a(b.target).parents(".cdJSEnabledText").toggleClass("askShowMore")})});h.when("jQuery","load").execute(function(a){var b=a(".askSubHeader");
0<b.length&&!p.pageYOffset&&a("html, body").animate({scrollTop:b.offset().top},0)});h.when("jQuery","ready").execute(function(a){function b(){return a(p).scrollTop()+5>=a(document).height()-a(p).height()}function e(){b()&&d()}function c(){a("body").hasClass("allAnswersScrolling")?a(document).scroll(e):(a(".loadMoreAnswersMobile").show(),a(".loadMoreAnswersMobile").bind("touchstart click",d))}function d(){var l=a(".answersLoadingSpinner"),m=a(".loadMoreAnswersMobile"),n=a.trim(a(".askPage input[name=askQuestion]").val()),
r=a.trim(a(".askPage input[name=askSort]").val()),q=a(".askPage input[name=askLanguage]").val(),h=a(".askPage input[name=askAsin]").val(),n="/ask/answers/inline/"+n+"/"+g+"?pageSize=6&sort="+r+"&language="+q;h!==u&&(n+="&asin="+h);l.show();m.hide();a(".askMobileFailedToFetchMoreAnswers").hide();a(document).unbind("scroll",e);m.unbind("touchstart click",d);a.ajax({url:n,data:{},dataType:"html",cache:!1,timeout:2E3,success:function(e){l.hide();a(".askPage .answerBox").append(e);f&&(b()?d():f=!1);"true"===
a.trim(a("input[name=moreAnswersAfterPage"+g+"]").val())?c():a(".loadMoreAnswersMobile").hide();a(document).trigger("ajax:success");g+=1},error:function(){l.hide();a(".askMobileFailedToFetchMoreAnswers").show();c()}})}var f=!0,g=3;a("body").hasClass("allAnswersScrolling")&&(b()?d():f=!1,a(document).scroll(e));a(".loadMoreAnswersMobile").bind("touchstart click",d)});h.when("jQuery","ready").execute(function(a){var b=!0;a("body").delegate(".askQuestionForm","submit",function(c){c=a(c.currentTarget);
var d=c.find("[name='askQuestionText']"),f=d.val(),d=d.attr("placeholder");if("undefined"===typeof f||f.match(/^\s*$/)||f===d)return c.attr("class","askQuestionForm hasEmptyQuestion"),!1;if(b)return b=!1,d=e,f=0<=f.indexOf("?"),d(c,f),!1;c.attr("class","askQuestionForm");return!0});var e=function(a,b){b?a.trigger("submit"):a.attr("class","askQuestionForm hasBadQuestion")}});h.when("jQuery","ready").register("askPostQuestionValidation",function(a){function b(b){var g=a(b.currentTarget),n=d.val(),r=
d.attr("placeholder");a(".askError").hide();return"undefined"===typeof n||n.match(/^\s*$/)||n===r?(f.show(),b.stopImmediatePropagation(),!1):c?(c=!1,r=e,n=0<=n.indexOf("?"),r(g,n),b.stopImmediatePropagation(),!1):!0}function e(a,b){b?a.trigger("submit"):g.show()}var c=!0,d,f=a(".askEmptyQuestionError"),g=a(".askBadQuestionError");return{setup:function(a,c,f){d=f;a.delegate(c,"submit",b)}}});h.when("jQuery","askHuddlesControl","ready").execute(function(a,b){function e(c){var d="/ask/questions/inline/"+
a.trim(a(".askWidgetQuestions input.askAsin").val())+"/"+c;a.ajax({url:d,data:{},dataType:"html",cache:!1,timeout:5E3,success:function(d){a(".askInlineWidget .askFailedToFetchMoreQuestions").hide();a(".askInlineWidget .askLoadMoreQuestions").hide();a(".askInlineWidget .askMoreQandAResults").append(d);a(".askInlineWidget .askTopQandALoadMoreQuestions").hide();d=c+1;a(".askWidgetQuestions input.nextPage").val(d);d=document.getElementById("askInlineQuestionsPage-"+c);var e;if(e="undefined"!==typeof d&&
null!==d)e=d.getBoundingClientRect(),e=!(0<=e.top&&0<=e.left&&e.bottom<=(p.innerHeight||a(p).height())&&e.right<=(p.innerWidth||a(p).width()));if(e){e=0;do e+=d.offsetTop||0,d=d.offsetParent;while(d);d=e;a("html, body").animate({scrollTop:d},"slow")}b.initializeHuddlesLinks(a(".askInlineWidget .askMoreQandAResults"),"dp")},error:function(){a(".askInlineWidget .askFailedToFetchMoreQuestions").show()}})}a("body").delegate(".askInlineWidget .askSeeMoreQuestionsLink","click",function(a){e(2);a.preventDefault()});
a("body").delegate(".askInlineWidget .askLoadMoreQuestionsLink","click",function(b){var d=parseInt(a(".askWidgetQuestions input.nextPage").val(),10)||0;0<d&&(e(d),b.preventDefault())})});h.when("jQuery","ready").execute(function(a){function b(b){b=document.getElementById(b);var c;if(c="undefined"!==typeof b&&null!==b)c=b.getBoundingClientRect(),c=!(0<=c.top&&0<=c.left&&c.bottom<=(p.innerHeight||a(p).height())&&c.right<=(p.innerWidth||a(p).width()));if(c){c=0;do c+=b.offsetTop||0,b=b.offsetParent;
while(b);b=c;a("html, body").animate({scrollTop:b},"slow")}}function e(){var b=a(".askQuestionForm input.askAsin").val();return b&&0!==b.length?"?asin="+b:""}function c(c,f){if(c){var m=e();a.ajax({url:"/ask/answers/inline/"+c+"/"+f+m,data:{},dataType:"html",cache:!1,timeout:5E3,success:function(e){a(".askInlineWidget #failed-to-fetch-answers-"+c).hide();a(".askInlineWidget #askSeeAllAnswersLink-"+c).hide();a(".askInlineWidget .askCollapseAnswers-"+c).show();a(".askInlineWidget .askLoadMoreAnswersLink-"+
c).hide();a(".askInlineWidget #"+c).show();a(".askInlineWidget #"+c).append(e);d(c,f);b("askInlineAnswersPage-"+c+"-"+f)},error:function(){a(".askInlineWidget #failed-to-fetch-answers-"+c).show()}})}}function d(b,c){a(".askWidgetQuestions input.currentAnswersPage-"+b).val(c)}function f(c){b("question-"+c);setTimeout(function(){a(".askInlineWidget #"+c).empty();a(".askInlineWidget .askCollapseAnswers-"+c).hide();a(".askInlineWidget #failed-to-fetch-answers-"+c).hide();a(".askInlineWidget #askSeeAllAnswersLink-"+
c).show()},500);d(c,1)}a("body").delegate(".askInlineWidget .askWidgetSeeAllAnswersInline","click",function(b){var d=a(b.currentTarget).attr("data-questionId");c(d,1);b.preventDefault()});a("body").delegate(".askInlineWidget .askWidgetLoadMoreAnswersInline","click",function(b){var d=a(b.currentTarget).attr("data-questionId"),f=parseInt(a(".askWidgetQuestions input.currentAnswersPage-"+d).val(),10)||0;0<f&&(c(d,f+1),b.preventDefault())});a("body").delegate("input[name='collapse-to-most-helpful-answer']",
"click",function(b){b=a(b.currentTarget).attr("data-questionId");f(b)})});h.when("jQuery","ready").register("askAuthenticatedAjax",function(a){return{handler:function(b,e){var c=a(b.currentTarget),d=c.attr("action"),f=c.attr("method"),g=c.serializeArray(),l=c.attr("type"),d={url:d,type:f,data:g,dataType:l,timeout:e,beforeSend:function(b,d){d.dataType===u&&b.setRequestHeader("Accept","*/*;q=0.5, "+d.accepts.script);b.setRequestHeader("X-Requested-With","XMLHttpRequest");var f=a.Event("ajax:beforeSend");
c.trigger(f,[b,d]);if(!1!==f.result)c.trigger("ajax:send",b);else return!1},success:function(a,b,d){c.trigger("ajax:success",[a,b,d])},complete:function(a,b){c.trigger("ajax:complete",[a,b])},error:function(a,b,d){c.trigger("ajax:error",[a,b,d])}};if(!("withCredentials"in new XMLHttpRequest))return!0;d.xhrFields={withCredentials:!0};b.preventDefault();a.ajax(d)}}});h.when("jQuery","askAbstractLiveSearch","ready").register("askLiveSearch",function(a,b){return{setup:function(a,c,d){b.setup(a,c,d,"/ask/livesearch/search")}}});
h.when("askAbstractLiveSearch","ready").register("askDetailPageSearchLiveSearch",function(a){return{setup:function(b,e,c){a.setup(b,e,c,"/ask/livesearch/detailPageSearch/search")}}});h.when("jQuery","ready").register("askAbstractLiveSearch",function(a){function b(a){return"function"!==typeof a?function(){}:a}var e=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}();return{setup:function(c,
d,f,g){function l(b){C();clearTimeout(n);m=a.ajax(g,{type:"GET",data:{query:b,asin:y,forumId:A,liveSearchSessionId:q,liveSearchPageLoadId:h,searchSource:D,askLanguage:a.trim(w.find("[name=askLanguage]").val())}}).done(u).fail(k);r=b}var m,n,r,q=null,h=null,D=null,p=c.find(d),w=p.closest("form"),z=c.find(".askLiveSearchSessionId"),v=w.children("input[name=searchSource]"),y=a.trim(w.children("input.askAsin").val()),A=a.trim(w.children("input.askForumId").val()),D=a.trim(w.children("input[name=searchSource]").val()),
C=b(f.liveSearchStartCallback),u=b(f.liveSearchDoneCallback),B=b(f.liveSearchClearCallback),k=b(f.liveSearchFailCallback);c.undelegate(".livesearch").delegate(d,"keyup.livesearch input.livesearch",function(){var b=p.val(),c=a.trim(b);clearTimeout(n);if(c!==r){null===q&&(q=e(),z.val(q));h=a(".askLiveSearchPageLoadId").val();if(null===h||""===h)h=e(),a(".askLiveSearchPageLoadId").val(h);D=a.trim(v.val());0===c.length?(B(),m&&m.abort(),q=r=null):b.match(/\w\W+$/)?l(c):n=setTimeout(function(){l(c)},500)}})}}});
h.when("A","ready").register("askAbstractDetailPageSearchPostQuestion",function(a){function b(b,c,e){a.get("/gp/customer-forum/dynamic-update/validate-post.html",{contentType:"json",params:{body:b,checkIsQuestion:1},success:function(a){a.hasError||a.content.isQuestion?c():e()},error:function(){c()}})}var e=a.$,c={postQuestionTextInputSelector:"input",callbacks:{goodQuestion:function(){},badQuestion:function(){},emptyQuestion:function(){}}};return{setup:function(d,f){function g(){l.callbacks.badQuestion();
m=!0}var l=e.extend(!0,{},c,f),m=!1;a.declarative(d,"click",function(){var a=e(l.postQuestionTextInputSelector).val();"undefined"===typeof a||a.match(/^\s*$/)?l.callbacks.emptyQuestion():m?l.callbacks.goodQuestion():-1===a.indexOf("?")?g():b(a,l.callbacks.goodQuestion,g)})}}});h.when("A","a-alert","ready").register("askAnswerSolicitationDeleteAnswer",function(a,b){function e(b){return a.$("#askDeleteAnswerSection-"+b.data.answerId)}return{setup:function(c){var d=a.$("#askPostAnswerFormSection-"+c),
f=a.$("#askPostAnswerForm-"+c),g=a.$("#askPostAnswerResponse-"+c);a.declarative("ask-show-delete-answer-section","click",function(a){e(a).show()});a.declarative("ask-hide-delete-answer-section","click",function(a){e(a).hide()});a.declarative("ask-submit-delete-answer-form","click",function(c){c=c.data.answerId;var e=a.$("#askDeleteAnswerForm-"+c),n=a.$("#askAnswerContentSection-"+c),r=a.$("#askUpdateAnswerSection-"+c),q=b("#askDeleteAnswerError-"+c);q.hide();r.hide();a.post(e.attr("action"),{withCredentials:!0,
params:e.serializeArray(),indicator:a.$("#askDeleteAnswerSpinner-"+c),success:function(a,b,c){g.hide();n.hide();d.show();f.show()},error:function(a){q.html(a.http.responseText).show();r.show()}})})}}});h.when("jQuery","ready").register("askExpander",function(a){return{setup:function(b){b.delegate(".askExpanderContainer .askSeeMore","click",function(b){a(b.currentTarget).closest(".askExpanderContainer").addClass("askExpanderExpanded");b.preventDefault()});b.delegate(".askExpanderContainer .askSeeLess",
"click",function(b){a(b.currentTarget).parents(".askExpanderContainer").removeClass("askExpanderExpanded");b.preventDefault()})}}});h.when("A").register("askPreventEnterKey",function(a){a.declarative("ask-prevent-enter-key","keypress",function(a){13===a.$event.which&&a.$event.preventDefault()})});h.when("A","askUtils","ready").register("askPreventDoubleSubmit",function(a,b){return{idempotentSetup:b.makeIdempotent(function(){var b=!1;a.declarative("ask-prevent-double-submit","submit",function(a){b&&
a.$event.preventDefault();b=!0})})}});h.when("A","ready").register("askHuddlesControl",function(a){return{initializeHuddlesLinks:function(b,e){var c={};b.find(".askHuddlesUninitializedLink").each(function(b){b=a.$(this);var d=b.data("questionId");c[d]=b});var d=a.$.map(c,function(a,b){return b});0!==d.length&&a.$.ajax({url:"/ask/conversations/data",data:{questionId:d,sourcePage:e},timeout:5E3,traditional:!0,success:function(d){if(d=a.$.parseJSON(d))a.$.each(d,function(b,d){if(d.questionId&&c[d.questionId]){var f=
c[d.questionId];d.url&&(f.find("a").attr("href",d.url),f.removeClass("askHuddlesUninitializedLink"),d.chatboxParams&&a.declarative.create(f.find("a"),"render-huddles-chat",d.chatboxParams))}}),b.find(".askHuddlesUninitializedLink").remove()},complete:function(){a.trigger("ask:huddles-data:complete")}})},initializeChatbox:function(){h.when("A","huddles-chatbox").execute(function(a,e){a.declarative("render-huddles-chat","click",function(c){e.renderHuddleChat(a.$.extend({},c.data,{showEmbedded:!1}));
c.$event.preventDefault()})})}}});h.register("askCsmCounter",function(){function a(a){if("undefined"!==typeof a){var e=p.ue;if(e&&e.count){var c=e.count(a)||0;e.count(a,c+1)}}}return{logCounterMetric:a,logAddCounterMetric:function(a,e){if("undefined"!==typeof a){var c=p.ue;if(c&&c.count){var d=c.count(a)||0;c.count(a,d+e)}}},createRateLimitedCsmLogHandler:function(b){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1},300),a(b))}}}});h.when("A","jQuery","ready").register("askPrefetchDetailPageSearchData",
function(a,b){return{setup:function(){var b,c={};a.declarative("ask-detail-page-search-prefetch-click","click touchstart",function(d){var f=b||d.data.language;if(!c[f||"DEFAULT_KEY"]){d=d.data.asin;var g={};f&&(g.askLanguage=f);a.post("/ask/livesearch/detailPageSearch/search/prefetch/"+d,{params:g})}c[f||"DEFAULT_KEY"]=!0});a.declarative("ask-detail-page-search-prefetch-language-change","change",function(a){b=a.$target.val()})}}});h.when("A","ready").register("askUtils",function(a){var b=a.$,e=[];
return{makeIdempotent:function(a){var b=!1;return function(){b||(a.apply(this,arguments),b=!0)}},makeRateLimited:function(a,d){var f=!1,e=b.extend(!0,{},{minPeriodInMilliseconds:2E3},d);return function(){f||a.apply(this,arguments);f=!0;setTimeout(function(){f=!1},e.minPeriodInMilliseconds)}},idempotentDeclarative:function(b,d,f){function g(b,c,d){var f;a.declarative(b,c,function(a){f===u&&(f=a.type);a.type===f&&d(a)})}var l=b+d;e[l]||("click touchstart"===d||"touchstart click"===d?g(b,d,f):a.declarative(b,
d,f),e[l]=!0)},goToUrl:function(a){p.location.href=a}}});h.when("A","askCsmCounter","askUtils","ready").register("askLogClickCsm",function(a,b,e){return{idempotentSetup:function(){e.idempotentDeclarative("ask-log-click-csm","click touchstart",function(a){b.logCounterMetric(a.data.metricName)})}}});h.when("A","askUtils","ready").register("askFollowupQuestions",function(a,b){function e(a){var b=d(".askDetailPageSearchWidgetSection");b.length&&(b=b.offset().top,d("html, body").animate({scrollTop:b},
"slow"));b=d(".askDPSearchTextInput input, input.askDPSearchTextInput");b.val("").trigger("input");var e=d(".askDPSearchForm [name=followupSearchSource]").val();c(e);a=d.trim(a.$currentTarget.text());b.val(a).trigger("input")}function c(a){var b=d(".askDPSearchForm"),c=b.siblings(".askPostQuestionForm");b.add(c).find("[name=searchSource]").val(a)}var d=a.$;return{idempotentSetup:function(){b.idempotentDeclarative("ask-click-followup-question","click",e)},resetSWDPSearchSource:function(){var a=d(".askDPSearchForm [name=originalSearchSource]").val();
c(a)}}});h.when("A","askUtils","ready").register("askLanguageFilter",function(a,b){return{idempotentSetup:b.makeIdempotent(function(){a.declarative("ask-page-reload-on-language-filter-change","change",function(a){a=a.$currentTarget.find("option:selected").data("url");b.goToUrl(a)})})}});h.when("A","a-alert","ready").register("askUpperFunnelQuestionPostAnswer",function(a,b){return{setup:function(e){var c=a.$("#askPostAnswerFormSection-"+e),d=a.$("#askPostAnswerForm-"+e),f=a.$("#askAnswerTextArea-"+
e),g=a.$("#askPostAnswerResponse-"+e),l=a.$("#askPostAnswerSpinner-"+e),m=b("#askPostAnswerError-"+e);a.declarative.create(d,"ask-post-answer-submit");a.declarative("ask-post-answer-submit","submit",function(b){b.$event.preventDefault();c.children().hide();a.post(d.attr("action"),{withCredentials:!0,params:d.serializeArray(),indicator:l,success:function(a,b,c){g.html(a);g.show();f.val("")},error:function(b){401===b.http.status||409===b.http.status?(a.declarative.remove(d,"ask-post-answer-submit"),
d.submit()):(d.show(),m.html(b.http.responseText).show())}})});a.declarative("ask-submit-delete-answer-form","click",function(f){f=f.data.answerId;var e=a.$("#askDeleteAnswerForm-"+f),l=a.$("#askAnswerContentSection-"+f),m=a.$("#askUpdateAnswerSection-"+f),h=b("#askDeleteAnswerError-"+f);h.hide();m.hide();a.post(e.attr("action"),{withCredentials:!0,params:e.serializeArray(),indicator:a.$("#askDeleteAnswerSpinner-"+f),success:function(a,b,f){g.hide();l.hide();c.show();d.show()},error:function(a){h.html(a.http.responseText).show();
m.show()}})})}}});h.when("A","askUtils","ready").register("askUpperFunnelQuestionRedirect",function(a,b){return{setup:function(e){var c=a.$("#redirectDelay"),d=c.data("message"),f=10,g=setInterval(function(){f--;var a=d.replace("##delay##",f);c.text(a);0===f&&(clearInterval(g),b.goToUrl(e))},1E3);a.declarative("ask-redirect-to-spark-action","click",function(a){b.goToUrl(e)})}}});h.when("A","a-carousel-framework","a-alert","askCsmCounter","ready").register("askAnswerMoreQuestionsCarousel",function(a,
b,e,c){var d=a.$,f=0,g=0;return{initializeCarousel:function(){b.createAll();b.initializeAll();d(".ask-answer-more-questions-carousel-pagination-dots li:gt(4)").hide()},setup:function(l,m){var n=b.getCarouselByName("askAnswerMoreQuestionsCarouselContainer"),r=n.getAttr("set_size");a.on("a:carousel:askAnswerMoreQuestionsCarouselContainer:change:pageNumber",function(b){var e=b.newValue;1<=f&&6<e&&d(".ask-answer-more-questions-carousel-pagination-dots li:gt(5)").show();if(1>f&&5<e)n.gotoPage(b.oldValue);
else{g<e&&(c.logAddCounterMetric("ask-answer-more-questions-highest-card-number",e-g),g=e);b=b.oldValue;var l=d(".ask-answer-more-questions-carousel-pagination-dots li");l.eq(b-1).removeClass("a-selected");l.eq(e-1).addClass("a-selected")}"desktop"===m&&(b=a.$("#askAnswerMoreQuestionsDesktopBack"),1===e&&(b.removeClass("askAnswerMoreQuestionsDesktopBackActivate"),b.addClass("askAnswerMoreQuestionsDesktopBackDeactivate")),1<e&&(b.removeClass("askAnswerMoreQuestionsDesktopBackActivate"),b.addClass("askAnswerMoreQuestionsDesktopBackActivate")))});
a.declarative("ask-answer-more-question-show-more-click","click",function(a){c.logCounterMetric("ask-answer-more-questions-show-more-questions-link");a=n.getAttr("pageNumber");d(".ask-answer-more-questions-carousel-pagination-dots li:gt(5)").show();a+1<=r&&1<=f&&n.gotoPage(a+1)});a.declarative("ask-answer-more-question-show-no-click","click",function(a){c.logCounterMetric("ask-answer-more-questions-no-more-question-link");l.hide()});a.declarative("ask-answer-more-question-back-click","click",function(a){c.logCounterMetric("ask-answer-more-questions-back-previous-question-link");
n.gotoPrevPage()});a.declarative("ask-answer-more-questions-skip-click","click",function(a){c.logCounterMetric("ask-answer-more-questions-skip-question-link");a=n.getAttr("pageNumber");1<=f&&6<a+1&&d(".ask-answer-more-questions-carousel-pagination-dots li:gt(5)").show();a===r||1>f&&5===a?l.hide():n.gotoNextPage()});a.declarative("ask-answer-more-question-answer-click","click",function(b){b.$event.preventDefault();b=b.data.questionId;var g=n.getAttr("pageNumber"),l=a.$("#askPostAnswerForm-"+b),m=l.parents("li.a-carousel-card");
a.$("#askAnswerTextArea-"+b);a.$("#askPostAnswerResponse-"+b);var h=a.$("#askPostAnswerSpinner-"+b),p=e("#askPostAnswerError-"+b),v=d(".askAnswerMoreQuestionsConfirmation");a.post(l.attr("action"),{withCredentials:!0,params:l.serializeArray(),indicator:h,success:function(a,b,e){f++;c.logCounterMetric("ask-answer-more-questions-post-answer");1<=f&&d(".ask-answer-more-questions-carousel-pagination-dots li:eq(5)").show();v.show();setTimeout(function(){v.hide();m.html(a).show();g+1<=r&&n.gotoNextPage()},
2E3)},error:function(a){l.show();p.html(a.http.responseText).show()}})})},showAfterPopoverHideCallback:function(b){var d=a.$("#askPostAnswerResponse-"+b);b=a.$("#askAnswerTextArea-"+b);d.show();b.val("");d=5<g?g-f-2:g-f-1;c.logAddCounterMetric("ask-answer-more-questions-skipped-questions-close-popover",0<d?d:0);g=f=0}}});h.when("A","jQuery","askVoteControl","askExpander","askLiveSearch","askHuddlesControl","askCsmCounter","askPreventDoubleSubmit","askLanguageFilter","ready").register("askDetailPageWidget",
function(a,b,e,c,d,f,g,l,m){function n(a){a.delegate(".askInlineWidget .askLiveSearchEnabled","keypress",function(a){13===(a.keyCode||a.which)&&a.preventDefault()})}var r={liveSearchStartCallback:function(){b(".askLiveSearchLoading").show()},liveSearchDoneCallback:function(a){b(".askInlineWidget .askMoreQandAResults").empty();b(".askWidgetQuestions input.nextPage").val(2);b(".askInlineWidget .askTopQandALoadMoreQuestions").hide();b(".askLiveSearchLoading").hide();b(".askLiveSearchResults").html(a);
b(".askWidgetQuestions").attr("class","askWidgetQuestions askLiveSearchShow");b(".askInlineWidget .askQuestionExamples").hide();b(".askQuestionForm").attr("class","askQuestionForm");b(".askPostQuestionButtonContainer").show();b(".askLiveSearchSuccessfulMessage").show();b(".askLiveSearchFailureMessage").hide()},liveSearchClearCallback:function(){b(".askLiveSearchLoading").hide();b(".askWidgetQuestions").attr("class","askWidgetQuestions askLiveSearchHide");b(".askInlineWidget .askTopQandALoadMoreQuestions, .askInlineWidget .askQuestionExamples").show();
b(".askPostQuestionButtonContainer").hide()},liveSearchFailCallback:function(){b(".askLiveSearchLoading").hide();b(".askWidgetQuestions").attr("class","askWidgetQuestions askLiveSearchHide");b(".askInlineWidget .askTopQandALoadMoreQuestions, .askInlineWidget .askQuestionExamples").show();b(".askPostQuestionButtonContainer").show();b(".askLiveSearchSuccessfulMessage").hide();b(".askLiveSearchFailureMessage").show()}};return{setup:function(){var q=b("#cf-ask-cel");l.idempotentSetup();m.idempotentSetup();
e.setup(q);c.setup(q);n(q);d.setup(q,".askInlineWidget .askLiveSearchEnabled",r);f.initializeHuddlesLinks(q,"dp");(function(){var c=g.createRateLimitedCsmLogHandler("ask-btf-desktop-input-click");a.declarative("ask-btf-desktop-input-click","click touchstart",c);c=g.createRateLimitedCsmLogHandler("ask-btf-desktop-input-focusin");a.declarative("ask-btf-desktop-input-focusin","focusin",c);a.declarative("ask-btf-desktop-input-change","change",function(){g.logCounterMetric("ask-btf-desktop-input-change")});
a.declarative("ask-btf-desktop-input-keyup","keyup",function(){g.logCounterMetric("ask-btf-desktop-input-keyup")});a.declarative("ask-btf-search-link-click","click",function(){g.logCounterMetric("ask-btf-desktop-search-link-click");b(".ask-btf-search-link").addClass("aok-hidden");b(".ask-btf-search-box").removeClass("aok-hidden")})})()}}});h.when("jQuery","askVoteControl","askExpander","askHuddlesControl","askPreventDoubleSubmit","ready").register("askAllQuestionsPage",function(a,b,e,c,d){return{setup:function(){d.idempotentSetup();
b.setup(a(".askTeaserQuestions"));e.setup(a(".askTeaserQuestions"));c.initializeHuddlesLinks(a(".askTeaserQuestions"),"ql");c.initializeChatbox()}}});h.when("jQuery","askDesktopAnswerSolicitationPostAnswer","askAnswerSolicitationDeleteAnswer","askExpander","ready").register("askAnswerSolicitationLandingPage",function(a,b,e,c){return{setup:function(d){b.setup(d);e.setup(d);c.setup(a(".askTestQuestion"))}}});h.when("jQuery","askExpander","askHuddlesControl","ready").register("askDesktopAllAnswersPage",
function(a,b,e){return{setup:function(){b.setup(a(".askAnswersAndComments"));e.initializeChatbox()}}});h.when("A","askPrefetchDetailPageSearchData","askDetailPageSearchLiveSearch","askDesktopTabbing","askExpander","askDesktopDetailPageSearchPostQuestion","askDesktopDetailPageSearchCsm","askFollowupQuestions","ready").register("askDesktopDetailPageSearchWidget",function(a,b,e,c,d,f,g,l){var m=a.$;return{setup:function(){var n=m(".askSearchResultsContainer"),r=m(".askSearchTabHeaders"),q=m(".askDPSearchForm"),
h=m(".askDPSearchFailureMessage"),D=m(".askPostQuestionPromptContainer"),p=m(".askDPSearchPostQuestionPrompt"),w=m(".askDPSearchPostQuestionForm"),z=m(".askDPSearchQuestionErrorContainer"),v=m(".askDPSearchSearchIndicator"),y=m(".askDPSearchResultsViewableContent");e.setup(q,".askDPSearchTextInput",{liveSearchStartCallback:function(){z.children().hide();v.removeClass("aok-hidden");v.show()},liveSearchDoneCallback:function(a){y.removeClass("aok-hidden");n.html(a);r.show();D.show();h.hide();v.hide();
c.switchToTab(0);p.show();w.hide()},liveSearchClearCallback:function(){l.resetSWDPSearchSource();n.empty();r.hide();D.hide();h.hide();v.hide();z.children().hide()},liveSearchFailCallback:function(){n.empty();r.hide();D.hide();v.hide();h.show()}});b.setup();c.setup();d.setup(n);f.setup();g.setup();l.idempotentSetup();(function(){a.declarative("ask-dpsearch-desktop-input-binding-language-change","change",function(){m(".askDPSearchTextInput").val("").trigger("input")})})()}}});h.when("jQuery","askExpander",
"ready").register("askDesktopSingleAnswerPage",function(a,b){return{setup:function(){b.setup(a(".askAnswerAndComments"))}}});h.when("jQuery","askUpperFunnelQuestionPostAnswer","askExpander","ready").register("askDesktopUpperFunnelQuestionLandingPage",function(a,b,e){return{setup:function(c){b.setup(c);e.setup(a(".askTestQuestion"))}}});h.when("A").execute(function(a){a.on("a:dropdown:selected:question_order_dropdown",function(a){p.location=a.value})});h.when("jQuery","ready").execute(function(a){"placeholder"in
document.createElement("textarea")||a(".askQuestionForm textarea").each(function(){""===a(this).val()&&""!==a(this).attr("placeholder")&&a(this).val(a(this).attr("placeholder"));a(this).focus(function(){a(this).val()===a(this).attr("placeholder")&&a(this).val("")});a(this).blur(function(){""===a(this).val()&&a(this).val(a(this).attr("placeholder"))})})});h.when("jQuery","askAuthenticatedAjax","ready").register("askVoteControl",function(a,b){return{setup:function(e){e.undelegate(".voteAjax form","submit",
b.handler);e.undelegate(".voteAjax form","ajax:beforeSend");e.undelegate(".voteAjax form","ajax:send");e.undelegate(".voteAjax form","ajax:error");e.undelegate(".voteAjax form","ajax:success");e.delegate(".voteAjax form","submit",b.handler);e.delegate(".voteAjax form","ajax:beforeSend",function(b,d){var f=a(b.currentTarget),e=f.closest(".voteAjax");if(e.hasClass("up")&&f.hasClass("up")||e.hasClass("down")&&f.hasClass("down"))return b.preventDefault(),d.abort(),!1});e.delegate(".voteAjax form","ajax:error",
function(c,d){if(401===d.status||466===d.status)e.undelegate(".voteAjax form","submit",b.handler),a(c.currentTarget).trigger("submit")});e.delegate(".voteAjax form","ajax:success",function(b){b=a(b.currentTarget);var d=b.closest(".voteAjax"),f=d.find(".label"),e=d.find(".count"),l=b.hasClass("up")?1:-1,l=parseInt(f.attr("data-count"),10)+l;f.attr("data-count",l);e.text(""+l);d.attr("class","vote voteAjax "+b.attr("class"))})}}});h.when("A","ready").register("askDesktopTabbing",function(a){function b(a){(function(a){var b=
c(".askSearchResultsHeader");a=c(b.get(a));b.removeClass("askSearchResultsHeaderActive");a.addClass("askSearchResultsHeaderActive")})(a);(function(a){var b=c(".askSearchResults");a=c(b.get(a));b.removeClass("askSearchResultsActive");a.addClass("askSearchResultsActive")})(a)}function e(){a.declarative("ask-dpsearch-desktop-go-to-tab","click",function(a){c(".askSearchResultsHeader").index(a.$target);b(a.data.index)})}var c=a.$;return{setup:function(){e()},switchToTab:b}});h.when("A","askAbstractDetailPageSearchPostQuestion",
"askUtils","ready").register("askDesktopDetailPageSearchPostQuestion",function(a,b,e){var c=a.$;return{setup:function(){var d=c(".askDPSearchForm"),f=c(".askDPSearchQuestionErrorContainer"),g=f.find(".askBadQuestionError");a.declarative("ask-dpsearch-desktop-open-post-question","click",function(a){c(".askDPSearchPostQuestionPrompt").hide();c(".askDPSearchPostQuestionForm").removeClass("aok-hidden").show();a=c(".askDPSearchTextInput").val();c("input.askDPSearchPostTextInput").val(a)});var l={postQuestionTextInputSelector:"input.askDPSearchPostTextInput",
callbacks:{goodQuestion:e.makeRateLimited(function(){d.submit()},{minPeriodInMilliseconds:2E3}),badQuestion:function(){f.children().hide();g.show()}}};b.setup("ask-dpsearch-desktop-post-question",l)}}});h.when("A","askCsmCounter","askLogClickCsm","ready").register("askDesktopDetailPageSearchCsm",function(a,b,e){return{setup:function(){a.declarative("ask-dpsearch-desktop-input-change","change",function(){b.logCounterMetric("ask-dpsearch-desktop-input-change")});a.declarative("ask-dpsearch-desktop-input-keyup",
"keyup",function(){b.logCounterMetric("ask-dpsearch-desktop-input-keyup")});var c=b.createRateLimitedCsmLogHandler("ask-dpsearch-desktop-input-click");a.declarative("ask-dpsearch-desktop-input-click","click touchstart",c);c=b.createRateLimitedCsmLogHandler("ask-dpsearch-desktop-input-focusin");a.declarative("ask-dpsearch-desktop-input-focusin","focusin",c);e.idempotentSetup()}}});h.when("A","jQuery","ready").register("askModerationControl",function(a,b){function e(a,b){var c="";b.forEach(function(b){c+=
a.replace(/##marketplace##/g,b.marketplace||"").replace(/##uri##/g,b.uri||"").replace(/##subject##/g,(b.subject||"").id).replace(/##text##/g,b.text||"").replace(/##author##/g,b.actorId||"").replace(/##submitDate##/g,b.submitDate||"").replace(/##contentState##/g,b.contentState||"").replace(/##moderationState##/g,b.moderationState||"")});return c}function c(a,b){var c="";b.forEach(function(b){c+=a.replace(/##marketplace##/g,b.marketplace||"").replace(/##uri##/g,b.uri||"").replace(/##subject##/g,b.questionUri||
"").replace(/##text##/g,b.text||"").replace(/##author##/g,b.actorId||"").replace(/##submitDate##/g,b.submitDate||"").replace(/##contentState##/g,b.contentState||"").replace(/##moderationState##/g,b.moderationState||"")});return c}function d(a){a=a.serializeArray();var c={};b.map(a,function(a,b){c[a.name]=a.value});return c}return{setup:function(f){function g(){var b=d(f.find("#byCustomerForm"));if(n(b,["customerId","type"])){var g=b.type,l;a:switch(g){case "questions":l=f.find("#questionResultTable");
break a;case "answers":l=f.find("#answerResultTable");break a;default:l=null}var m="answers"===g?c:e;a.get("/ask/moderator/searchByCustomer/"+g,{params:b,success:function(a){var b=z(a.items,"uri");B.val(a.nextPageToken||"");l.find("tbody").append(m(A,b)).parent().show()},error:y})}}function l(b,g){var l=d(f.find("#byThreadForm"));n(l,["questionId"])&&(b&&a.get("/ask/moderator/searchByThread/questions",{params:l,success:function(a){a=a.items;C.find("tbody").append(e(A,a)).parent().show()},error:y}),
g&&a.get("/ask/moderator/searchByThread/answers",{params:l,success:function(a){a=a.items;k.val(u.find("tbody tr").length+a.length);u.find("tbody").append(c(A,a)).parent().show()},error:y}))}function m(b,c,d){a.post("/ask/moderator/moderate/"+d,{params:{action:b,uris:c.join(",")},success:v,error:y})}function n(a,b){var c=[];b.forEach(function(b){var d="Field "+b+" must be specified.";b=a[b]&&0!==a[b].trim().length?void 0:d;b&&c.push(b)});return c.length?(r(c),!1):!0}function r(a){a="<ul>"+b.map(a,
function(a){return"<li>"+a+"</li>"}).join("")+"</ul>";var c=f.find(".moderationError");c.show();c.find(".a-alert-content").html(a)}function q(){f.find(".moderationError").hide().find(".a-alert-content").html("");f.find(".moderationSuccess").hide().find(".a-alert-content").html("")}function h(){f.find("#questionResultTable").hide().find("tbody").html("");f.find("#answerResultTable").hide().find("tbody").html("")}function D(){B.val("");k.val(0);G.val(10)}function p(a){var c=[];a.find("tbody tr").each(function(a,
d){if(b(d).find("input:checkbox").is(":checked")){var f=b(d).find(".itemUri").data("uri");-1===c.indexOf(f)&&c.push(f)}});return c}function w(a){a=a.attr("id");return a.match("question")?"questions":a.match("answer")?"answers":""}function z(a,b){var c=[];return a.filter(function(a){a=a[b]||"";var d=-1===c.indexOf(a);d&&c.push(a);return d})}function v(a){f.find(".moderationSuccess").show().find(".a-alert-content").html("Action Success!")}function y(a){r(["Error Encountered: "+a.http.responseText])}
var A=f.find("#template-tr-item").first().html(),C=f.find("#questionResultTable"),u=f.find("#answerResultTable"),B=f.find("input[name='nextPageToken']"),k=f.find("input[name='offset']"),G=f.find("input[name='limit']"),E="byThread";a.on("a:tabs:searchCriterion:select",function(a){E=a.selectedTab.tabName});f.delegate(".searchByCustomer","click",function(a){q();h();D();g()});f.delegate(".searchByThread","click",function(a){q();h();D();l(!0,!0)});f.delegate(".loadMore","click",function(a){q();"byCustomer"===
E?g():l(!1,!0)});f.delegate(".unsuppress","click",function(a){q();f.find("table:visible").each(function(a,c){var d=b(c),f=p(d);(d=w(d))&&f.length&&m("unsuppress",f,d)})});f.delegate(".suppress","click",function(a){q();f.find("table:visible").each(function(a,c){var d=b(c),f=p(d);(d=w(d))&&f.length&&m("suppress",f,d)})});f.delegate(".suppressAll","click",function(b){q();(b=f.find("input[name='questionId']").val())?confirm("Are you sure to suppress the question and all the answers to it?")&&a.post("/ask/moderator/moderate/suppressAll",
{params:{questionId:b.trim()},success:v,error:y}):r(["No Question Specified."])});f.delegate("input[name='selectAll']","change",function(a){a=this.checked;b(this).parents("table").find("tbody input:checkbox").prop("checked",a)});f.delegate("select[name='type']","change",function(a){q();h()})}}});h.when("A","a-modal","a-alert","askAnswerMoreQuestionsCarousel","a-carousel-framework","askCsmCounter","ready").register("askDesktopAnswerSolicitationPostAnswer",function(a,b,e,c,d,f){function g(b){var e=
d.getCarouselByName("askAnswerMoreQuestionsCarouselContainer");a.on("a:popover:afterHide:askAnswerMoreQuestionsModal",function(a){c.showAfterPopoverHideCallback(b)});a.declarative("ask-answer-more-questions-desktop-back-click","click",function(a){f.logCounterMetric("ask-answer-more-questions-desktop-back-link");1<=e.getAttr("pageNumber")-1&&e.gotoPrevPage()});a.declarative("ask-answer-more-questions-desktop-pagination-click","click",function(a){f.logCounterMetric("ask-answer-more-questions-desktop-pagination-dot-click");
e.gotoPage(a.data.card)})}return{setup:function(d){var m=a.$("#askPostAnswerFormSection-"+d),n=a.$("#askPostAnswerForm-"+d),r=a.$("#askAnswerTextArea-"+d),q=a.$("#askPostAnswerResponse-"+d),h=a.$("#askPostAnswerSpinner-"+d),D=e("#askPostAnswerError-"+d);a.declarative.create(n,"ask-post-answer-submit");a.declarative("ask-post-answer-submit","submit",function(e){e.$event.preventDefault();m.children().hide();a.post(n.attr("action"),{withCredentials:!0,params:n.serializeArray(),indicator:h,success:function(e,
m,n){f.logCounterMetric("ask-answer-solicitation-post-answer");q.html(e);e=a.$(".askAnswerMoreQuestionsModal");e.length?(f.logCounterMetric("ask-answer-more-questions-enter"),b.create(e,{name:"askAnswerMoreQuestionsModal",inlineContent:e,height:358,width:427,hideHeader:"true"}).show(),c.initializeCarousel(),e=b.get("askAnswerMoreQuestionsModal"),c.setup(e,"desktop"),g(d)):(q.show(),r.val(""))},error:function(b){401===b.http.status||409===b.http.status?(a.declarative.remove(n,"ask-post-answer-submit"),
n.submit()):(n.show(),D.html(b.http.responseText).show())}})})}}})});