define("b3e3fff",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("849c8c1"),n=i.__importStar(e("0b0187d")),r=e("6b31927"),o=e("919d479"),s=e("5e68366"),a=function(){function e(){}return e.prototype.configure=function(e){this.settings=e},e.prototype.doValidation=function(e,t,i){function a(t){var i=r.Range.create(e.positionAt(t.getOffset()),e.positionAt(t.getOffset()+t.getLength())),o=e.languageId;return{code:t.getRule().id,source:o,message:t.getMessage(),severity:t.getLevel()===n.Level.Warning?r.DiagnosticSeverity.Warning:r.DiagnosticSeverity.Error,range:i}}if(void 0===i&&(i=this.settings),i&&i.validate===!1)return[];var u=[];u.push.apply(u,n.ParseErrorCollector.entries(t)),u.push.apply(u,s.LintVisitor.entries(t,e,new o.LintConfigurationSettings(i&&i.lint)));var g=[];for(var f in o.Rules)g.push(o.Rules[f].id);return u.filter(function(e){return e.getLevel()!==n.Level.Ignore}).map(a)},e}();t.CSSValidation=a});