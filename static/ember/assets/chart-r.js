/* jshint ignore:start */

/* jshint ignore:end */

define('chart-r/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'chart-r/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('chart-r/components/auth-manager', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		isLoggedIn: false,
		username: '',
		password: '',
		errorMsg: '',
		remember: false,
		userid: -1,
		actions: {
			login: function login() {
				//do stuff to authenticate here
				var username = this.get('username');
				var password = this.get('password');
				var remember = this.get('remember');
				var data = {
					'username': username,
					'password': password };
				var controllerObj = this;
				Ember['default'].$.post('../api/session/', data, function (response) {
					if (response.isauthenticated) {
						//success
						console.log('Login POST Request to ../api/session/ was successful.');
						controllerObj.set('username', response.username);
						controllerObj.set('userid', response.userid);
						controllerObj.set('isLoggedIn', true);

						if (remember) {
							//save username and pass to local storage
							localStorage.setItem('remember', true);
							localStorage.setItem('username', controllerObj.get('username'));
							localStorage.setItem('password', controllerObj.get('password'));
						} else {
							localStorage.removeItem('remember');
							localStorage.removeItem('username');
							localStorage.removeItem('password');
						}
						controllerObj.set('password', '');
					} else {
						//errors
						console.log('Login POST Request to ../api/session/ was unsuccessful.');
						controllerObj.set('errorMsg', response.message);
					}
				});
			},
			logout: function logout() {
				var controllerObj = this;
				Ember['default'].$.ajax({ url: '../api/session/', type: 'DELETE' }).then(function (response) {
					console.log('Logout DELETE Request to ../api/session/ was successful:' + response);
					controllerObj.set('isLoggedIn', false);
					controllerObj.set('errorMsg', '');
					controllerObj.set('username', '');
					controllerObj.set('userid', -1);

					if (localStorage.remember) {
						controllerObj.set('remember', localStorage.remember);
						controllerObj.set('username', localStorage.username);
						controllerObj.set('password', localStorage.password);
					}
				});
			}
		},
		init: function init() {
			this._super();
			var controllerObj = this;
			Ember['default'].$.get('../api/session/', function (response) {
				if (response.isauthenticated) {
					//success
					console.log('The user: \'' + response.username + '\' is currently logged in.');
					controllerObj.set('username', response.username);
					controllerObj.set('userid', response.userid);
					controllerObj.set('isLoggedIn', true);
				} else {
					//errors
					console.log('The user is not currently logged in.');
				}
			});
			if (localStorage.remember) {
				this.set('remember', localStorage.remember);
				this.set('username', localStorage.username);
				this.set('password', localStorage.password);
			}
		}
	});

});
define('chart-r/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, bs_accordion_item) {

	'use strict';



	exports.default = bs_accordion_item.default;

});
define('chart-r/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, bs_accordion) {

	'use strict';



	exports.default = bs_accordion.default;

});
define('chart-r/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, bs_alert) {

	'use strict';



	exports.default = bs_alert.default;

});
define('chart-r/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, bsButtonGroup) {

	'use strict';

	exports['default'] = bsButtonGroup['default'];

});
define('chart-r/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, bsButton) {

	'use strict';

	exports['default'] = bsButton['default'];

});
define('chart-r/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, bs_collapse) {

	'use strict';



	exports.default = bs_collapse.default;

});
define('chart-r/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, bs_dropdown_button) {

	'use strict';



	exports.default = bs_dropdown_button.default;

});
define('chart-r/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, bs_dropdown_menu) {

	'use strict';



	exports.default = bs_dropdown_menu.default;

});
define('chart-r/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, bs_dropdown_toggle) {

	'use strict';



	exports.default = bs_dropdown_toggle.default;

});
define('chart-r/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, bs_dropdown) {

	'use strict';



	exports.default = bs_dropdown.default;

});
define('chart-r/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, bs_form_element) {

	'use strict';



	exports.default = bs_form_element.default;

});
define('chart-r/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, bs_form_group) {

	'use strict';



	exports.default = bs_form_group.default;

});
define('chart-r/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, bs_form) {

	'use strict';



	exports.default = bs_form.default;

});
define('chart-r/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, bs_input) {

	'use strict';



	exports.default = bs_input.default;

});
define('chart-r/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, bs_modal_backdrop) {

	'use strict';



	exports.default = bs_modal_backdrop.default;

});
define('chart-r/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, bs_modal_body) {

	'use strict';



	exports.default = bs_modal_body.default;

});
define('chart-r/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, bs_modal_dialog) {

	'use strict';



	exports.default = bs_modal_dialog.default;

});
define('chart-r/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, bs_modal_footer) {

	'use strict';



	exports.default = bs_modal_footer.default;

});
define('chart-r/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, bs_modal_header) {

	'use strict';



	exports.default = bs_modal_header.default;

});
define('chart-r/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, bs_modal) {

	'use strict';



	exports.default = bs_modal.default;

});
define('chart-r/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, bs_nav_item) {

	'use strict';



	exports.default = bs_nav_item.default;

});
define('chart-r/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, bs_nav) {

	'use strict';



	exports.default = bs_nav.default;

});
define('chart-r/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, bs_navbar_content) {

	'use strict';



	exports.default = bs_navbar_content.default;

});
define('chart-r/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, bs_navbar_nav) {

	'use strict';



	exports.default = bs_navbar_nav.default;

});
define('chart-r/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, bs_navbar_toggle) {

	'use strict';



	exports.default = bs_navbar_toggle.default;

});
define('chart-r/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, bs_navbar) {

	'use strict';



	exports.default = bs_navbar.default;

});
define('chart-r/components/bs-popover-element', ['exports', 'ember-bootstrap/components/bs-popover-element'], function (exports, bs_popover_element) {

	'use strict';



	exports.default = bs_popover_element.default;

});
define('chart-r/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, bs_popover) {

	'use strict';



	exports.default = bs_popover.default;

});
define('chart-r/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, bs_progress_bar) {

	'use strict';



	exports.default = bs_progress_bar.default;

});
define('chart-r/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, bs_progress) {

	'use strict';



	exports.default = bs_progress.default;

});
define('chart-r/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, bs_select) {

	'use strict';



	exports.default = bs_select.default;

});
define('chart-r/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, bs_tab_pane) {

	'use strict';



	exports.default = bs_tab_pane.default;

});
define('chart-r/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, bs_tab) {

	'use strict';



	exports.default = bs_tab.default;

});
define('chart-r/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, bs_textarea) {

	'use strict';



	exports.default = bs_textarea.default;

});
define('chart-r/components/bs-tooltip-element', ['exports', 'ember-bootstrap/components/bs-tooltip-element'], function (exports, bs_tooltip_element) {

	'use strict';



	exports.default = bs_tooltip_element.default;

});
define('chart-r/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, bs_tooltip) {

	'use strict';



	exports.default = bs_tooltip.default;

});
define('chart-r/components/c3-chart', ['exports', 'ember-cli-c3/components/c3-chart'], function (exports, c3_chart) {

	'use strict';



	exports.default = c3_chart.default;

});
define('chart-r/components/ember-chart', ['exports', 'ember-cli-chartjs/components/ember-chart'], function (exports, ember_chart) {

	'use strict';



	exports.default = ember_chart.default;

});
define('chart-r/components/ember-table', ['exports', 'ember-table/components/ember-table'], function (exports, EmberTable) {

	'use strict';

	exports['default'] = EmberTable['default'];

});
define('chart-r/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, ember_wormhole) {

	'use strict';



	exports.default = ember_wormhole.default;

});
define('chart-r/controllers/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		pieValue1: 0, // CME Data start
		pieValue2: 0,
		pieValue3: 0,
		pieValue4: 0,
		pieValue5: 0,
		pieValue6: 0,
		pieValue7: 0, // CME data end
		pieValue8: 0, // Avg Data
		pieValue9: 0, // Avg Data
		pieValue10: 0, // Jan data
		pieValue11: 0, // Jan data
		pieValue12: 0, // Jan data
		pieValue13: 0, // Jan data
		pieValue14: 0, // Jan data
		pieValue15: 0, // Jan data
		pieValue16: 0, // Jan data
		pieValue17: 0, // Average Data holders
		pieValue18: 0,
		pieValue19: 0,
		pieValue20: 0,
		pieValue21: 0, // End of Average Data
		pieValue22: 0, // Start of FEB
		pieValue23: 0,
		pieValue24: 0,
		pieValue25: 0,
		pieValue26: 0,
		pieValue27: 0,
		pieValue28: 0, // End of FEB
		pieValue29: 0, // Start of March
		pieValue30: 0,
		pieValue31: 0,
		pieValue32: 0,
		pieValue33: 0,
		pieValue34: 0,
		pieValue35: 0, // End of March
		pieValue36: 0, // Start of APR
		pieValue37: 0,
		pieValue38: 0,
		pieValue39: 0,
		pieValue40: 0,
		pieValue41: 0,
		pieValue42: 0, // End of APR
		pieValue43: 0, // Start of May
		pieValue44: 0,
		pieValue45: 0,
		pieValue46: 0,
		pieValue47: 0,
		pieValue48: 0,
		pieValue49: 0, // End of May
		pieValue50: 0, // Start of JUN
		pieValue51: 0,
		pieValue52: 0,
		pieValue53: 0,
		pieValue54: 0,
		pieValue55: 0,
		pieValue56: 0, // End of JUN
		pieValue57: 0, // Start of JUL
		pieValue58: 0,
		pieValue59: 0,
		pieValue60: 0,
		pieValue61: 0,
		pieValue62: 0,
		pieValue63: 0, // End of JUL
		pieValue64: 0, // Start of AUG
		pieValue65: 0,
		pieValue66: 0,
		pieValue67: 0,
		pieValue68: 0,
		pieValue69: 0,
		pieValue70: 0, // End of AUG
		pieValue71: 0, // Start of SEP
		pieValue72: 0,
		pieValue73: 0,
		pieValue74: 0,
		pieValue75: 0,
		pieValue76: 0,
		pieValue77: 0, // End of SEP
		pieValue78: 0, // Start of OCT
		pieValue79: 0,
		pieValue80: 0,
		pieValue81: 0,
		pieValue82: 0,
		pieValue83: 0,
		pieValue84: 0, // End of OCT
		pieValue85: 0, // Start of NOV
		pieValue86: 0,
		pieValue87: 0,
		pieValue88: 0,
		pieValue89: 0,
		pieValue90: 0,
		pieValue91: 0, // End of NOV
		pieValue92: 0, // Start of DEC
		pieValue93: 0,
		pieValue94: 0,
		pieValue95: 0,
		pieValue96: 0,
		pieValue97: 0,
		pieValue98: 0, // End of DEC
		lastrow: 0, //last row for keeping track of input table rows
		init: function init() {
			this._super();
			var controllerObj = this;
			var tempcount1 = 0;
			var tempcount2 = 0;
			var tempcount3 = 0;
			var tempcount4 = 0;
			var tempcount5 = 0;
			var tempcount6 = 0;
			var tempcount7 = 0;
			var tempcount8 = 0;
			var tempcount9 = 0;
			var tempcount10 = 0;
			var tempcount11 = 0;
			var tempcount12 = 0;
			var tempcount13 = 0;
			var tempcount14 = 0;
			var tempcount15 = 0;
			var tempcount16 = 0;
			var tempcount17 = 0;
			var tempcount18 = 0;
			var tempcount19 = 0;
			var tempcount20 = 0;
			var tempcount21 = 0;
			var tempcount22 = 0;
			var tempcount23 = 0;
			var tempcount24 = 0;
			var tempcount25 = 0;
			var tempcount26 = 0;
			var tempcount27 = 0;
			var tempcount28 = 0;
			var tempcount29 = 0;
			var tempcount30 = 0;
			var tempcount31 = 0;
			var tempcount32 = 0;
			var tempcount33 = 0;
			var tempcount34 = 0;
			var tempcount35 = 0;
			var tempcount36 = 0;
			var tempcount37 = 0;
			var tempcount38 = 0;
			var tempcount39 = 0;
			var tempcount40 = 0;
			var tempcount41 = 0;
			var tempcount42 = 0;
			var tempcount43 = 0;
			var tempcount44 = 0;
			var tempcount45 = 0;
			var tempcount46 = 0;
			var tempcount47 = 0;
			var tempcount48 = 0;
			var tempcount49 = 0;
			var tempcount50 = 0;
			var tempcount51 = 0;
			var tempcount52 = 0;
			var tempcount53 = 0;
			var tempcount54 = 0;
			var tempcount55 = 0;
			var tempcount56 = 0;
			var tempcount57 = 0;
			var tempcount58 = 0;
			var tempcount59 = 0;
			var tempcount60 = 0;
			var tempcount61 = 0;
			var tempcount62 = 0;
			var tempcount63 = 0;
			var tempcount64 = 0;
			var tempcount65 = 0;
			var tempcount66 = 0;
			var tempcount67 = 0;
			var tempcount68 = 0;
			var tempcount69 = 0;
			var tempcount70 = 0;
			var tempcount71 = 0;
			var tempcount72 = 0;
			var tempcount73 = 0;
			var tempcount74 = 0;
			var tempcount75 = 0;
			var tempcount76 = 0;
			var tempcount77 = 0;
			var tempcount78 = 0;
			var tempcount79 = 0;
			var tempcount80 = 0;
			var tempcount81 = 0;
			var tempcount82 = 0;
			var tempcount83 = 0;
			var tempcount84 = 0;
			var tempcount85 = 0;
			var tempcount86 = 0;
			var tempcount87 = 0;
			var tempcount88 = 0;
			var tempcount89 = 0;
			var tempcount90 = 0;
			var tempcount91 = 0;
			var tempcount92 = 0;
			var tempcount93 = 0;
			var tempcount94 = 0;
			var tempcount95 = 0;
			var tempcount96 = 0;
			var tempcount97 = 0;
			var tempcount98 = 0;
			var tempcount8a = 0;
			var tempcount9a = 0;
			var tempcount17a = 0;
			var tempcount18a = 0;
			var tempcount19a = 0;
			var tempcount20a = 0;
			var tempcount21a = 0;
			Ember['default'].$.getJSON('../api/bankdata/', function (response) {
				for (var alpha = 0; alpha < response.length; alpha++) {
					if (response[alpha].option === 'Fast Food') {
						tempcount1 += response[alpha].amount;
						controllerObj.set('pieValue1', tempcount1);
					} else if (response[alpha].option === 'Happy Hour') {
						tempcount2 += response[alpha].amount;
						controllerObj.set('pieValue2', tempcount2);
					} else if (response[alpha].option === 'Clothing') {
						tempcount3 += response[alpha].amount;
						controllerObj.set('pieValue3', tempcount3);
					} else if (response[alpha].option === 'Short Term Savings') {
						tempcount4 += response[alpha].amount;
						controllerObj.set('pieValue4', tempcount4);
					} else if (response[alpha].option === 'Long Term Savings') {
						tempcount5 += response[alpha].amount;
						controllerObj.set('pieValue5', tempcount5);
					} else if (response[alpha].option === 'Makeup') {
						tempcount6 += response[alpha].amount;
						controllerObj.set('pieValue6', tempcount6);
					} else if (response[alpha].option === 'Vacation Spending') {
						tempcount7 += response[alpha].amount;
						controllerObj.set('pieValue7', tempcount7);
					} else {
						console.log("Uh Oh!");
					}
				}
			});
			Ember['default'].$.getJSON('../api/bankdata/', function (response2) {
				for (var charlie = 0; charlie < response2.length; charlie++) {
					if (response2[charlie].date.substring(0, 2) === '01') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount10 += response2[charlie].amount;
							controllerObj.set('pieValue10', tempcount10);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount11 += response2[charlie].amount;
							controllerObj.set('pieValue11', tempcount11);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount12 += response2[charlie].amount;
							controllerObj.set('pieValue12', tempcount12);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount13 += response2[charlie].amount;
							controllerObj.set('pieValue13', tempcount13);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount14 += response2[charlie].amount;
							controllerObj.set('pieValue14', tempcount14);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount15 += response2[charlie].amount;
							controllerObj.set('pieValue15', tempcount15);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount16 += response2[charlie].amount;
							controllerObj.set('pieValue16', tempcount16);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '02') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount22 += response2[charlie].amount;
							controllerObj.set('pieValue22', tempcount22);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount23 += response2[charlie].amount;
							controllerObj.set('pieValue23', tempcount23);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount24 += response2[charlie].amount;
							controllerObj.set('pieValue24', tempcount24);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount25 += response2[charlie].amount;
							controllerObj.set('pieValue25', tempcount25);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount26 += response2[charlie].amount;
							controllerObj.set('pieValue26', tempcount26);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount27 += response2[charlie].amount;
							controllerObj.set('pieValue27', tempcount27);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount28 += response2[charlie].amount;
							controllerObj.set('pieValue28', tempcount28);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '03') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount29 += response2[charlie].amount;
							controllerObj.set('pieValue29', tempcount29);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount30 += response2[charlie].amount;
							controllerObj.set('pieValue30', tempcount30);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount31 += response2[charlie].amount;
							controllerObj.set('pieValue31', tempcount31);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount32 += response2[charlie].amount;
							controllerObj.set('pieValue32', tempcount32);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount33 += response2[charlie].amount;
							controllerObj.set('pieValue33', tempcount33);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount34 += response2[charlie].amount;
							controllerObj.set('pieValue34', tempcount34);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount35 += response2[charlie].amount;
							controllerObj.set('pieValue35', tempcount35);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '04') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount36 += response2[charlie].amount;
							controllerObj.set('pieValue36', tempcount36);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount37 += response2[charlie].amount;
							controllerObj.set('pieValue37', tempcount37);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount38 += response2[charlie].amount;
							controllerObj.set('pieValue38', tempcount38);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount39 += response2[charlie].amount;
							controllerObj.set('pieValue39', tempcount39);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount40 += response2[charlie].amount;
							controllerObj.set('pieValue40', tempcount40);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount41 += response2[charlie].amount;
							controllerObj.set('pieValue41', tempcount41);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount42 += response2[charlie].amount;
							controllerObj.set('pieValue42', tempcount42);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '05') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount43 += response2[charlie].amount;
							controllerObj.set('pieValue43', tempcount43);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount44 += response2[charlie].amount;
							controllerObj.set('pieValue44', tempcount44);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount45 += response2[charlie].amount;
							controllerObj.set('pieValue45', tempcount45);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount46 += response2[charlie].amount;
							controllerObj.set('pieValue46', tempcount46);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount47 += response2[charlie].amount;
							controllerObj.set('pieValue47', tempcount47);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount48 += response2[charlie].amount;
							controllerObj.set('pieValue48', tempcount48);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount49 += response2[charlie].amount;
							controllerObj.set('pieValue49', tempcount49);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '06') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount50 += response2[charlie].amount;
							controllerObj.set('pieValue50', tempcount50);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount51 += response2[charlie].amount;
							controllerObj.set('pieValue51', tempcount51);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount52 += response2[charlie].amount;
							controllerObj.set('pieValue52', tempcount52);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount53 += response2[charlie].amount;
							controllerObj.set('pieValue53', tempcount53);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount54 += response2[charlie].amount;
							controllerObj.set('pieValue54', tempcount54);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount55 += response2[charlie].amount;
							controllerObj.set('pieValue55', tempcount55);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount56 += response2[charlie].amount;
							controllerObj.set('pieValue56', tempcount56);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '07') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount57 += response2[charlie].amount;
							controllerObj.set('pieValue57', tempcount57);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount58 += response2[charlie].amount;
							controllerObj.set('pieValue58', tempcount58);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount59 += response2[charlie].amount;
							controllerObj.set('pieValue59', tempcount59);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount60 += response2[charlie].amount;
							controllerObj.set('pieValue60', tempcount60);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount61 += response2[charlie].amount;
							controllerObj.set('pieValue61', tempcount61);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount62 += response2[charlie].amount;
							controllerObj.set('pieValue62', tempcount62);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount63 += response2[charlie].amount;
							controllerObj.set('pieValue63', tempcount63);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '08') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount64 += response2[charlie].amount;
							controllerObj.set('pieValue64', tempcount64);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount65 += response2[charlie].amount;
							controllerObj.set('pieValue65', tempcount65);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount66 += response2[charlie].amount;
							controllerObj.set('pieValue66', tempcount66);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount67 += response2[charlie].amount;
							controllerObj.set('pieValue67', tempcount67);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount68 += response2[charlie].amount;
							controllerObj.set('pieValue68', tempcount68);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount69 += response2[charlie].amount;
							controllerObj.set('pieValue69', tempcount69);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount70 += response2[charlie].amount;
							controllerObj.set('pieValue70', tempcount70);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '09') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount71 += response2[charlie].amount;
							controllerObj.set('pieValue71', tempcount71);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount72 += response2[charlie].amount;
							controllerObj.set('pieValue72', tempcount72);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount73 += response2[charlie].amount;
							controllerObj.set('pieValue73', tempcount73);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount74 += response2[charlie].amount;
							controllerObj.set('pieValue74', tempcount74);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount75 += response2[charlie].amount;
							controllerObj.set('pieValue75', tempcount75);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount76 += response2[charlie].amount;
							controllerObj.set('pieValue76', tempcount76);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount77 += response2[charlie].amount;
							controllerObj.set('pieValue77', tempcount77);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '10') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount78 += response2[charlie].amount;
							controllerObj.set('pieValue78', tempcount78);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount79 += response2[charlie].amount;
							controllerObj.set('pieValue79', tempcount79);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount80 += response2[charlie].amount;
							controllerObj.set('pieValue80', tempcount80);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount81 += response2[charlie].amount;
							controllerObj.set('pieValue81', tempcount81);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount82 += response2[charlie].amount;
							controllerObj.set('pieValue82', tempcount82);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount83 += response2[charlie].amount;
							controllerObj.set('pieValue83', tempcount83);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount84 += response2[charlie].amount;
							controllerObj.set('pieValue84', tempcount84);
						} else {
							console.log("Uh Oh!");
						}
					} else if (response2[charlie].date.substring(0, 2) === '11') {
						if (response2[charlie].option === 'Fast Food') {
							tempcount85 += response2[charlie].amount;
							controllerObj.set('pieValue85', tempcount85);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount86 += response2[charlie].amount;
							controllerObj.set('pieValue86', tempcount86);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount87 += response2[charlie].amount;
							controllerObj.set('pieValue87', tempcount87);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount88 += response2[charlie].amount;
							controllerObj.set('pieValue88', tempcount88);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount89 += response2[charlie].amount;
							controllerObj.set('pieValue89', tempcount89);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount90 += response2[charlie].amount;
							controllerObj.set('pieValue90', tempcount90);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount91 += response2[charlie].amount;
							controllerObj.set('pieValue91', tempcount91);
						} else {
							console.log("Uh Oh!");
						}
					} else {
						if (response2[charlie].option === 'Fast Food') {
							tempcount92 += response2[charlie].amount;
							controllerObj.set('pieValue92', tempcount92);
						} else if (response2[charlie].option === 'Happy Hour') {
							tempcount93 += response2[charlie].amount;
							controllerObj.set('pieValue93', tempcount93);
						} else if (response2[charlie].option === 'Clothing') {
							tempcount94 += response2[charlie].amount;
							controllerObj.set('pieValue94', tempcount94);
						} else if (response2[charlie].option === 'Short Term Savings') {
							tempcount95 += response2[charlie].amount;
							controllerObj.set('pieValue95', tempcount95);
						} else if (response2[charlie].option === 'Long Term Savings') {
							tempcount96 += response2[charlie].amount;
							controllerObj.set('pieValue96', tempcount96);
						} else if (response2[charlie].option === 'Makeup') {
							tempcount97 += response2[charlie].amount;
							controllerObj.set('pieValue97', tempcount97);
						} else if (response2[charlie].option === 'Vacation Spending') {
							tempcount98 += response2[charlie].amount;
							controllerObj.set('pieValue98', tempcount98);
						} else {
							console.log("Uh Oh!");
						}
					}
				}
			});
			Ember['default'].$.getJSON('../api/bankdata/', function (response1) {
				for (var beta = 0; beta < response1.length; beta++) {
					if (response1[beta].option === 'Fast Food') {
						tempcount8 += response1[beta].amount;
						tempcount8a += 1;
					} else if (response1[beta].option === 'Happy Hour') {
						tempcount9 += response1[beta].amount;
						tempcount9a += 1;
					} else if (response1[beta].option === 'Clothing') {
						tempcount17 += response1[beta].amount;
						tempcount17a += 1;
					} else if (response1[beta].option === 'Short Term Savings') {
						tempcount18 += response1[beta].amount;
						tempcount18a += 1;
					} else if (response1[beta].option === 'Long Term Savings') {
						tempcount19 += response1[beta].amount;
						tempcount19a += 1;
					} else if (response1[beta].option === 'Makeup') {
						tempcount20 += response1[beta].amount;
						tempcount20a += 1;
					} else if (response1[beta].option === 'Vacation Spending') {
						tempcount21 += response1[beta].amount;
						tempcount21a += 1;
					} else {
						console.log("Uh Oh!");
					}
				}
				if (tempcount8a === '0') {
					tempcount8a = 1;
					return false;
				} else if (tempcount9a === '0') {
					tempcount9a = 1;
					return false;
				} else if (tempcount17a === '0') {
					tempcount17a = 1;
					return false;
				} else if (tempcount18a === '0') {
					tempcount18a = 1;
					return false;
				} else if (tempcount19a === '0') {
					tempcount19a = 1;
					return false;
				} else if (tempcount20a === '0') {
					tempcount20a = 1;
					return false;
				} else if (tempcount21a === '0') {
					tempcount21a = 1;
					return false;
				} else {
					controllerObj.set('pieValue8', parseFloat(tempcount8 / tempcount8a));
					controllerObj.set('pieValue9', parseFloat(tempcount9 / tempcount9a));
					controllerObj.set('pieValue17', parseFloat(tempcount17 / tempcount17a));
					controllerObj.set('pieValue18', parseFloat(tempcount18 / tempcount18a));
					controllerObj.set('pieValue19', parseFloat(tempcount19 / tempcount19a));
					controllerObj.set('pieValue20', parseFloat(tempcount20 / tempcount20a));
					controllerObj.set('pieValue21', parseFloat(tempcount21 / tempcount21a));
				}
			});
		},
		pieData: Ember['default'].computed('pieValue1', 'pieValue2', 'pieValue3', 'pieValue4', 'pieValue5', 'pieValue6', 'pieValue7', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseFloat(this.get('pieValue1')), parseFloat(this.get('pieValue2')), parseFloat(this.get('pieValue3')), parseFloat(this.get('pieValue4')), parseFloat(this.get('pieValue5')), parseFloat(this.get('pieValue6')), parseFloat(this.get('pieValue7'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataJAN: Ember['default'].computed('pieValue22', 'picValue23', 'pieValue24', 'pieValue25', 'pieValue26', 'pieValue27', 'pieValue28', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue22')), parseInt(this.get('pieValue23')), parseInt(this.get('pieValue24')), parseInt(this.get('pieValue25')), parseInt(this.get('pieValue26')), parseInt(this.get('pieValue27')), parseInt(this.get('pieValue28'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataFEB: Ember['default'].computed('pieValue29', 'picValue30', 'pieValue31', 'pieValue32', 'pieValue33', 'pieValue34', 'pieValue35', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue29')), parseInt(this.get('pieValue30')), parseInt(this.get('pieValue31')), parseInt(this.get('pieValue32')), parseInt(this.get('pieValue33')), parseInt(this.get('pieValue34')), parseInt(this.get('pieValue35'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataMAR: Ember['default'].computed('pieValue36', 'picValue37', 'pieValue38', 'pieValue39', 'pieValue40', 'pieValue41', 'pieValue42', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue36')), parseInt(this.get('pieValue37')), parseInt(this.get('pieValue38')), parseInt(this.get('pieValue39')), parseInt(this.get('pieValue40')), parseInt(this.get('pieValue41')), parseInt(this.get('pieValue42'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataAPR: Ember['default'].computed('pieValue43', 'picValue44', 'pieValue45', 'pieValue46', 'pieValue47', 'pieValue48', 'pieValue49', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue43')), parseInt(this.get('pieValue44')), parseInt(this.get('pieValue45')), parseInt(this.get('pieValue46')), parseInt(this.get('pieValue47')), parseInt(this.get('pieValue48')), parseInt(this.get('pieValue49'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataMAY: Ember['default'].computed('pieValue50', 'picValue51', 'pieValue52', 'pieValue53', 'pieValue54', 'pieValue55', 'pieValue56', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue50')), parseInt(this.get('pieValue51')), parseInt(this.get('pieValue52')), parseInt(this.get('pieValue53')), parseInt(this.get('pieValue54')), parseInt(this.get('pieValue55')), parseInt(this.get('pieValue56'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataJUN: Ember['default'].computed('pieValue57', 'picValue58', 'pieValue59', 'pieValue60', 'pieValue61', 'pieValue62', 'pieValue63', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue57')), parseInt(this.get('pieValue58')), parseInt(this.get('pieValue59')), parseInt(this.get('pieValue60')), parseInt(this.get('pieValue61')), parseInt(this.get('pieValue62')), parseInt(this.get('pieValue63'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataJUL: Ember['default'].computed('pieValue64', 'picValue65', 'pieValue66', 'pieValue67', 'pieValue68', 'pieValue69', 'pieValue70', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue64')), parseInt(this.get('pieValue65')), parseInt(this.get('pieValue66')), parseInt(this.get('pieValue67')), parseInt(this.get('pieValue68')), parseInt(this.get('pieValue69')), parseInt(this.get('pieValue70'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataAUG: Ember['default'].computed('pieValue71', 'picValue72', 'pieValue73', 'pieValue74', 'pieValue75', 'pieValue76', 'pieValue77', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue71')), parseInt(this.get('pieValue72')), parseInt(this.get('pieValue73')), parseInt(this.get('pieValue74')), parseInt(this.get('pieValue75')), parseInt(this.get('pieValue76')), parseInt(this.get('pieValue77'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataSEP: Ember['default'].computed('pieValue78', 'picValue79', 'pieValue80', 'pieValue81', 'pieValue82', 'pieValue83', 'pieValue84', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue78')), parseInt(this.get('pieValue79')), parseInt(this.get('pieValue80')), parseInt(this.get('pieValue81')), parseInt(this.get('pieValue82')), parseInt(this.get('pieValue83')), parseInt(this.get('pieValue84'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataOCT: Ember['default'].computed('pieValue85', 'picValue86', 'pieValue87', 'pieValue88', 'pieValue89', 'pieValue90', 'pieValue91', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue85')), parseInt(this.get('pieValue86')), parseInt(this.get('pieValue87')), parseInt(this.get('pieValue88')), parseInt(this.get('pieValue89')), parseInt(this.get('pieValue90')), parseInt(this.get('pieValue91'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataNOV: Ember['default'].computed('pieValue92', 'picValue93', 'pieValue94', 'pieValue95', 'pieValue96', 'pieValue97', 'pieValue98', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue92')), parseInt(this.get('pieValue93')), parseInt(this.get('pieValue94')), parseInt(this.get('pieValue95')), parseInt(this.get('pieValue96')), parseInt(this.get('pieValue97')), parseInt(this.get('pieValue98'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieDataDEC: Ember['default'].computed('pieValue10', 'picValue11', 'pieValue12', 'pieValue13', 'pieValue14', 'pieValue15', 'pieValue16', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseInt(this.get('pieValue10')), parseInt(this.get('pieValue11')), parseInt(this.get('pieValue12')), parseInt(this.get('pieValue13')), parseInt(this.get('pieValue14')), parseInt(this.get('pieValue15')), parseInt(this.get('pieValue16'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		pieData3: Ember['default'].computed('pieValue8', 'picValue9', 'pieValue17', 'pieValue18', 'pieValue19', 'pieValue20', 'pieValue21', function () {
			return {
				labels: ["Fast Food", "Happy Hour", "Clothing", "Short Term Savings", "Long Term Savings", "Makeup", "Vacation Spending"],
				datasets: [{
					data: [parseFloat(this.get('pieValue8')), parseFloat(this.get('pieValue9')), parseFloat(this.get('pieValue17')), parseFloat(this.get('pieValue18')), parseFloat(this.get('pieValue19')), parseFloat(this.get('pieValue20')), parseFloat(this.get('pieValue21'))],
					backgroundColor: ["#986dc7", "#46BFBD", "#fe5e68", "#00ffff", "#33ffcc", "#4d79ff", "#e6004c"],
					hoverBackgroundColor: ["#ae7cba", "#5AD3D1", "#fe625e", "#f0f8ff", "#3bffec", "#0039e6", "#990033"]
				}]
			};
		}),
		actions: {
			addrow: function addrow() {
				var table = document.getElementById("ITable");
				var row = table.insertRow(-1);
				row.className = "data " + table.length + "rowid";
				this.set('lastrow', this.get('lastrow') + 1);
				table.children[1].lastChild.id = "rowid-" + this.get('lastrow');
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				var cell4 = row.insertCell(3);
				var cell5 = row.insertCell(4);
				cell1.innerHTML = "Insert Date(MM/DD/YYYY)";
				cell1.className = "inputValue";
				cell2.innerHTML = "Insert Description";
				cell2.className = "inputValue";
				cell3.innerHTML = "Insert Amount(0.00)";
				cell3.className = "inputValue";
				cell4.innerHTML = "<ul id='list'><select id='categories' class='inputValue' name='categories'><option>Select Option</option><option>Fast Food</option><option>Happy Hour</option><option>Clothing</option><option>Short Term Savings</option><option>Long Term Savings</option><option>Makeup</option><option>Vacation Expense</option></select></ul>";
				cell5.innerHTML = "<button contenteditable='false' type='button' {{action 'deleterow'}}> Delete </button>";
			},
			deleterow: function deleterow(id) {
				console.log(Ember['default'].$('#rowid-' + id));
				Ember['default'].$('#rowid-' + id).remove();
			},
			submit: function submit() {
				var test1 = 0;
				var test2 = 0;
				var test3 = 0;
				/*			var data = Ember.$("#ITable tr.data").map(function () {
	   				var sub = [];
	   				Ember.$('.inputValue', this).each(function () {
	   					var d = Ember.$(this).val() || Ember.$(this).text();
	   					sub.push(d);
	   					console.log(d);
	   				});
	   				console.log('sub is:');
	   				console.log(sub);
	   				var postdata = {
	   					'user' : 1,
	   					'date' : sub[0],
	   					'desc' : sub[1],
	   					'amount': Number(sub[2]),
	   					'option': sub[3],
	   				};
	   				Ember.$.post('../api/bankdata/', postdata, function(response){
	   					console.log('Made request with response:');
	   					console.log(response);
	   				});
	   				return sub;
	   
	   			});
	   */
				for (var dcount = 0; dcount < data.length; dcount = dcount + 4) {
					var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
					if (data[dcount].match(re) === null) {
						alert("Please submit a date with the format MM/DD/YYYY.");
					} else {
						var parts = data[dcount].split("/");
						var day = parseInt(parts[1], 10);
						var month = parseInt(parts[0], 10);
						var year = parseInt(parts[2], 10);

						if (year < 1000 || year > 3000 || month === 0 || month > 12) {
							alert("Please submit a valid date.");
							test1 = 1;
							return false, test1;
						} else {
							localStorage.setItem("Date" + dcount, data[dcount]);
							test1 = 0;
							return test1;
						}

						var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
						//if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)){
						//	monthLength[1] = 29;
						//	return day > 0 && day <= monthLength[month - 1];
						//}
					}
				}
				for (var desc = 1; desc < data.length; desc = desc + 4) {
					var redesc = /^[a-zA-Z0-9]/;
					if (data[desc].match(redesc) === null) {
						alert("Sorry! No special characters accepted.");
						test2 = 1;
						return test2;
					} else {
						localStorage.setItem("Description" + desc, data[desc]);
						test2 = 0;
						return test2;
					}
				}
				for (var ammo = 2; ammo < data.length; ammo = ammo + 4) {
					var reammo = /^\d+(?:\.\d{0,2})$/;
					if (data[ammo].match(reammo) === null) {
						alert("Please submit a valid curreny amount (0.00)");
						test3 = 1;
						return test3;
					} else {
						localStorage.setItem("Amount" + ammo, data[ammo]);
						test3 = 0;
						return test3;
					}
				}
				for (var opt = 3; opt < data.length; opt = opt + 4) {
					localStorage.setItem("Option" + opt, data[opt]);
				}
				if (test1 === 1 || test2 === 1 || test3 === 1) {
					alert("You did something wrong!");
				} else {
					var data = Ember['default'].$("#ITable tr.data").map(function () {
						var sub = [];
						Ember['default'].$('.inputValue', this).each(function () {
							var d = Ember['default'].$(this).val() || Ember['default'].$(this).text();
							sub.push(d);
							console.log(d);
						});
						console.log('sub is:');
						console.log(sub);
						var postdata = {
							'user': 1,
							'date': sub[0],
							'desc': sub[1],
							'amount': Number(sub[2]),
							'option': sub[3]
						};
						Ember['default'].$.post('../api/bankdata/', postdata, function (response) {
							console.log('Made request with response:');
							console.log(response);
						});
						return sub;
					});
				}
			},
			loaddata: function loaddata() {
				var table1 = document.getElementById('ITable2').getElementsByTagName('tbody')[0];
				Ember['default'].$.getJSON('../api/bankdata/', function (response) {
					for (var beta = 0; beta < response.length; beta++) {
						var row1 = table1.insertRow(table1.rows.length);
						var cells1 = row1.insertCell(0);
						var cells2 = row1.insertCell(1);
						var cells3 = row1.insertCell(2);
						var cells4 = row1.insertCell(3);
						cells1.innerHTML = response[beta].date;
						cells2.innerHTML = response[beta].desc;
						cells3.innerHTML = response[beta].amount;
						cells4.innerHTML = response[beta].option;
					}
				});
			}
		}
	});

});
define('chart-r/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chart-r/controllers/newfeature', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		newfield: "testdata",
		computedField: Ember['default'].computed('newfield', function () {
			var newfield = this.get('newfield');
			return newfield + "/";
		})
	});

});
define('chart-r/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('chart-r/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, bs_contains) {

	'use strict';



	exports.default = bs_contains.default;
	exports.bsContains = bs_contains.bsContains;

});
define('chart-r/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, bs_eq) {

	'use strict';



	exports.default = bs_eq.default;
	exports.eq = bs_eq.eq;

});
define('chart-r/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, bs_not) {

	'use strict';



	exports.default = bs_not.default;
	exports.not = bs_not.not;

});
define('chart-r/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, bs_read_path) {

	'use strict';



	exports.default = bs_read_path.default;
	exports.readPath = bs_read_path.readPath;

});
define('chart-r/initializers/app-version', ['exports', 'chart-r/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('chart-r/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, bootstrap_linkto) {

	'use strict';



	exports.default = bootstrap_linkto.default;
	exports.initialize = bootstrap_linkto.initialize;

});
define('chart-r/initializers/export-application-global', ['exports', 'ember', 'chart-r/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('chart-r/initializers/load-bootstrap-config', ['exports', 'chart-r/config/environment', 'ember-bootstrap/config'], function (exports, ENV, Config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() /* container, application */{
    Config['default'].load(ENV['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };

});
define('chart-r/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, initializer) {

	'use strict';

	exports['default'] = initializer['default'];

});
define('chart-r/router', ['exports', 'ember', 'chart-r/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('newfeature');
    this.route('ImportT');
  });

  exports['default'] = Router;

});
define('chart-r/routes/import-t', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('chart-r/routes/newfeature', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('chart-r/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 186,
              "column": 2
            }
          },
          "moduleName": "chart-r/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h1");
          dom.setAttribute(el1,"id","title");
          var el2 = dom.createTextNode("Welcome to Chartreuse");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1,"id","description");
          var el2 = dom.createTextNode("Your Personal and Secure Banking Application");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode(" \n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("title");
          var el3 = dom.createTextNode("Bootstrap Case");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("meta");
          dom.setAttribute(el2,"charset","utf-8");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("meta");
          dom.setAttribute(el2,"name","viewport");
          dom.setAttribute(el2,"content","width=device-width, initial-scale=1");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("link");
          dom.setAttribute(el2,"rel","stylesheet");
          dom.setAttribute(el2,"href","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("script");
          dom.setAttribute(el2,"src","https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("script");
          dom.setAttribute(el2,"src","https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n	");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2,"class","nav nav-tabs");
          dom.setAttribute(el2,"role","tablist");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3,"role","presentation");
          dom.setAttribute(el3,"class","active");
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"href","#CME");
          dom.setAttribute(el4,"aria-controls","CME");
          dom.setAttribute(el4,"role","tab");
          dom.setAttribute(el4,"data-toggle","tab");
          var el5 = dom.createTextNode("Current Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3,"role","presentation");
          dom.setAttribute(el3,"class","dropdown");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"class","dropdown-toggle");
          dom.setAttribute(el4,"href","#");
          dom.setAttribute(el4,"role","button");
          dom.setAttribute(el4,"data-toggle","dropdown");
          dom.setAttribute(el4,"aria-haspopup","true");
          dom.setAttribute(el4,"aria-expanded","false");
          var el5 = dom.createTextNode("Past Months Expenditure ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"class","caret");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("ul");
          dom.setAttribute(el4,"class","dropdown-menu");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#JAN");
          dom.setAttribute(el6,"aria-controls","JAN");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("January");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#FEB");
          dom.setAttribute(el6,"aria-controls","FEB");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("February");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#MAR");
          dom.setAttribute(el6,"aria-controls","MAR");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("March");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#APR");
          dom.setAttribute(el6,"aria-controls","APR");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("April");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#MAY");
          dom.setAttribute(el6,"aria-controls","MAY");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("May");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#JUN");
          dom.setAttribute(el6,"aria-controls","JUN");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("June");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#JUL");
          dom.setAttribute(el6,"aria-controls","JUL");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("July");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#AUG");
          dom.setAttribute(el6,"aria-controls","AUG");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("Auguest");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#SEP");
          dom.setAttribute(el6,"aria-controls","SEP");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("September");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#OCT");
          dom.setAttribute(el6,"aria-controls","OCT");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("Oktober");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#NOV");
          dom.setAttribute(el6,"aria-controls","NOV");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("November");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("li");
          dom.setAttribute(el5,"role","presentation");
          var el6 = dom.createElement("a");
          dom.setAttribute(el6,"href","#DEC");
          dom.setAttribute(el6,"aria-controls","DEC");
          dom.setAttribute(el6,"role","tab");
          dom.setAttribute(el6,"data-toggle","tab");
          var el7 = dom.createTextNode("December");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3,"role","presentation");
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"href","#HA");
          dom.setAttribute(el4,"aria-controls","HA");
          dom.setAttribute(el4,"role","tab");
          dom.setAttribute(el4,"data-toggle","tab");
          var el5 = dom.createTextNode("Historical Analysis");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3,"role","presentation");
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"href","#IT");
          dom.setAttribute(el4,"aria-controls","IT");
          dom.setAttribute(el4,"role","tab");
          dom.setAttribute(el4,"data-toggle","tab");
          var el5 = dom.createTextNode("Import Table");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" \n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("li");
          dom.setAttribute(el3,"role","presentation");
          var el4 = dom.createElement("a");
          dom.setAttribute(el4,"href","#VT");
          dom.setAttribute(el4,"aria-controls","VT");
          dom.setAttribute(el4,"role","tab");
          dom.setAttribute(el4,"data-toggle","tab");
          var el5 = dom.createTextNode("View Table");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" \n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","tab-content");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","CME");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Current Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your expenditure for this month. To add expenses to this chart, go to the Import Data tab and import expenses.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","JAN");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  \n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","FEB");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","MAR");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","APR");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" \n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","MAY");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","JUN");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","JUL");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" \n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","AUG");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","SEP");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","OCT");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  \n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","NOV");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  \n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","DEC");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Past Month's Expenditure");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows your previous months expenses, to see expenses from a specific month, select the drop down menu on this tab and select the month you would like to see.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" \n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" \n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","HA");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Historical Analysis");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This chart shows the average amount of spent monthly on specific categories.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","IT");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("Import Table");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4,"type","button");
          var el5 = dom.createTextNode(" Add New Entry ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("table");
          dom.setAttribute(el4,"id","ITable");
          dom.setAttribute(el4,"class","table table-striped");
          dom.setAttribute(el4,"contenteditable","true");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("thead");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("tr");
          dom.setAttribute(el6,"contenteditable","false");
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("th");
          var el8 = dom.createTextNode("Date");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("th");
          var el8 = dom.createTextNode("Description");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("th");
          var el8 = dom.createTextNode("Amount");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("tbody");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("tr");
          dom.setAttribute(el6,"class","data");
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          dom.setAttribute(el7,"class","inputValue");
          var el8 = dom.createTextNode("MM/DD/YYYY");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          dom.setAttribute(el7,"class","inputValue");
          var el8 = dom.createTextNode("Insert Description");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          dom.setAttribute(el7,"class","inputValue");
          var el8 = dom.createTextNode("00.00");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          var el8 = dom.createTextNode("\n                ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("ul");
          dom.setAttribute(el8,"id","list");
          var el9 = dom.createTextNode("\n                  ");
          dom.appendChild(el8, el9);
          var el9 = dom.createElement("select");
          dom.setAttribute(el9,"id","categories");
          dom.setAttribute(el9,"class","inputValue");
          dom.setAttribute(el9,"name","categories");
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Select Option");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Fast Food");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Happy Hour");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Clothing");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Short Term Savings");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Long Term Savings");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Makeup");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                    ");
          dom.appendChild(el9, el10);
          var el10 = dom.createElement("option");
          var el11 = dom.createTextNode("Vacation Expense");
          dom.appendChild(el10, el11);
          dom.appendChild(el9, el10);
          var el10 = dom.createTextNode("\n                  ");
          dom.appendChild(el9, el10);
          dom.appendChild(el8, el9);
          var el9 = dom.createTextNode("\n                ");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          var el8 = dom.createElement("button");
          dom.setAttribute(el8,"contenteditable","false");
          dom.setAttribute(el8,"type","button");
          var el9 = dom.createTextNode(" Delete ");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4,"type","button");
          var el5 = dom.createTextNode(" Submit ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" \n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3,"role","tabpanel");
          dom.setAttribute(el3,"class","tab-pane in active");
          dom.setAttribute(el3,"id","VT");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("h3");
          var el5 = dom.createTextNode("View Table");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("p");
          var el5 = dom.createTextNode("This table shows all expenditures.");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("button");
          dom.setAttribute(el4,"type","button");
          var el5 = dom.createTextNode(" Load Me Some Data ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("table");
          dom.setAttribute(el4,"id","ITable2");
          dom.setAttribute(el4,"class","table table-striped");
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("thead");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("tr");
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("th");
          var el8 = dom.createTextNode("Date");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("th");
          var el8 = dom.createTextNode("Description");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("th");
          var el8 = dom.createTextNode("Amount");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("th");
          var el8 = dom.createTextNode("Option");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n          ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("tbody");
          var el6 = dom.createTextNode("\n            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("tr");
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n              ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("td");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n            ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [4, 15]);
          var element1 = dom.childAt(element0, [29]);
          var element2 = dom.childAt(element1, [5]);
          var element3 = dom.childAt(element1, [7, 3, 1, 9, 0]);
          var element4 = dom.childAt(element1, [9]);
          var element5 = dom.childAt(element0, [31, 5]);
          var morphs = new Array(18);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),5,5);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),5,5);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),5,5);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]),5,5);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]),5,5);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]),5,5);
          morphs[6] = dom.createMorphAt(dom.childAt(element0, [13]),5,5);
          morphs[7] = dom.createMorphAt(dom.childAt(element0, [15]),5,5);
          morphs[8] = dom.createMorphAt(dom.childAt(element0, [17]),5,5);
          morphs[9] = dom.createMorphAt(dom.childAt(element0, [19]),5,5);
          morphs[10] = dom.createMorphAt(dom.childAt(element0, [21]),5,5);
          morphs[11] = dom.createMorphAt(dom.childAt(element0, [23]),5,5);
          morphs[12] = dom.createMorphAt(dom.childAt(element0, [25]),5,5);
          morphs[13] = dom.createMorphAt(dom.childAt(element0, [27]),5,5);
          morphs[14] = dom.createElementMorph(element2);
          morphs[15] = dom.createElementMorph(element3);
          morphs[16] = dom.createElementMorph(element4);
          morphs[17] = dom.createElementMorph(element5);
          return morphs;
        },
        statements: [
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieData",["loc",[null,[42,36],[42,43]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[42,6],[42,78]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataJAN",["loc",[null,[48,36],[48,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[48,6],[48,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataFEB",["loc",[null,[54,36],[54,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[54,6],[54,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataMAR",["loc",[null,[60,36],[60,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[60,6],[60,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataAPR",["loc",[null,[66,36],[66,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[66,6],[66,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataMAY",["loc",[null,[71,36],[71,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[71,6],[71,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataJUN",["loc",[null,[77,36],[77,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[77,6],[77,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataJUL",["loc",[null,[83,36],[83,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[83,6],[83,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataAUG",["loc",[null,[88,36],[88,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[88,6],[88,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataSEP",["loc",[null,[94,36],[94,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[94,6],[94,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataOCT",["loc",[null,[100,36],[100,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[100,6],[100,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataNOV",["loc",[null,[106,36],[106,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[106,6],[106,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieDataDEC",["loc",[null,[112,36],[112,46]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[112,6],[112,81]]]],
          ["inline","ember-chart",[],["type","pie","data",["subexpr","@mut",[["get","pieData3",["loc",[null,[118,36],[118,44]]]]],[],[]],"width",350,"height",350,"legend",true],["loc",[null,[118,6],[118,79]]]],
          ["element","action",["addrow"],[],["loc",[null,[124,28],[124,47]]]],
          ["element","action",["deleterow"],[],["loc",[null,[152,64],[152,86]]]],
          ["element","action",["submit"],[],["loc",[null,[156,28],[156,47]]]],
          ["element","action",["loaddata"],[],["loc",[null,[162,28],[162,49]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 187,
                "column": 4
              },
              "end": {
                "line": 188,
                "column": 4
              }
            },
            "moduleName": "chart-r/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() { return []; },
          statements: [

          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 186,
              "column": 2
            },
            "end": {
              "line": 189,
              "column": 4
            }
          },
          "moduleName": "chart-r/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","errorMsg",["loc",[null,[187,10],[187,18]]]]],[],0,null,["loc",[null,[187,4],[188,11]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 190,
            "column": 10
          }
        },
        "moduleName": "chart-r/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","auth-manager",[],["isLoggedIn",["subexpr","@mut",[["get","isLoggedIn",["loc",[null,[1,26],[1,36]]]]],[],[]]],["loc",[null,[1,0],[1,38]]]],
        ["block","if",[["get","isLoggedIn",["loc",[null,[2,6],[2,16]]]]],[],0,1,["loc",[null,[2,0],[189,11]]]],
        ["content","outlet",["loc",[null,[190,0],[190,10]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/body-table-container', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 6
            },
            "end": {
              "line": 13,
              "column": 6
            }
          },
          "moduleName": "chart-r/templates/body-table-container.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","view",["lazy-table-block"],["classNames","ember-table-left-table-block","content",["subexpr","@mut",[["get","bodyContent",["loc",[null,[6,18],[6,29]]]]],[],[]],"columns",["subexpr","@mut",[["get","fixedColumns",["loc",[null,[7,18],[7,30]]]]],[],[]],"width",["subexpr","@mut",[["get","_fixedBlockWidth",["loc",[null,[8,16],[8,32]]]]],[],[]],"numItemsShowing",["subexpr","@mut",[["get","_numItemsShowing",["loc",[null,[9,26],[9,42]]]]],[],[]],"scrollTop",["subexpr","@mut",[["get","_scrollTop",["loc",[null,[10,20],[10,30]]]]],[],[]],"startIndex",["subexpr","@mut",[["get","_startIndex",["loc",[null,[11,21],[11,32]]]]],[],[]]],["loc",[null,[5,8],[12,10]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/body-table-container.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","antiscroll-box");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","antiscroll-inner");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","ember-table-table-scrollable-wrapper");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["block","if",[["get","numFixedColumns",["loc",[null,[4,12],[4,27]]]]],[],0,null,["loc",[null,[4,6],[13,13]]]],
        ["inline","view",["lazy-table-block"],["classNames","ember-table-right-table-block","content",["subexpr","@mut",[["get","bodyContent",["loc",[null,[15,16],[15,27]]]]],[],[]],"columns",["subexpr","@mut",[["get","tableColumns",["loc",[null,[16,16],[16,28]]]]],[],[]],"scrollLeft",["subexpr","@mut",[["get","_tableScrollLeft",["loc",[null,[17,19],[17,35]]]]],[],[]],"width",["subexpr","@mut",[["get","_tableBlockWidth",["loc",[null,[18,14],[18,30]]]]],[],[]],"numItemsShowing",["subexpr","@mut",[["get","_numItemsShowing",["loc",[null,[19,24],[19,40]]]]],[],[]],"scrollTop",["subexpr","@mut",[["get","_scrollTop",["loc",[null,[20,18],[20,28]]]]],[],[]],"startIndex",["subexpr","@mut",[["get","_startIndex",["loc",[null,[21,19],[21,30]]]]],[],[]]],["loc",[null,[14,6],[22,8]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/auth-manager', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/auth-manager.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1,"class","auth-form");
          var el2 = dom.createTextNode("\n		Hello ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","btn btn-default");
          var el3 = dom.createTextNode("Log out");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [2]);
          var element6 = dom.childAt(element5, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(element5,1,1);
          morphs[1] = dom.createElementMorph(element6);
          return morphs;
        },
        statements: [
          ["content","username",["loc",[null,[3,8],[3,20]]]],
          ["element","action",["logout"],[],["loc",[null,[4,48],[4,67]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 1
              },
              "end": {
                "line": 23,
                "column": 1
              }
            },
            "moduleName": "chart-r/templates/components/auth-manager.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("form");
            dom.setAttribute(el1,"class","form-inline auth-form");
            var el2 = dom.createTextNode("\n\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group has-error");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("label");
            dom.setAttribute(el3,"class","control-label");
            var el4 = dom.createElement("div");
            dom.setAttribute(el4,"class","alert alert-danger");
            dom.setAttribute(el4,"style","padding: 5px; margin-bottom: 0px;");
            dom.setAttribute(el4,"role","alert");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group has-error");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            dom.setAttribute(el2,"class","checkbox");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" Remember me\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"type","button");
            dom.setAttribute(el2,"class","btn btn-default");
            var el3 = dom.createTextNode("Sign in");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var element3 = dom.childAt(element2, [1]);
            var element4 = dom.childAt(element2, [7]);
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(element3, [1, 0]),0,0);
            morphs[1] = dom.createMorphAt(element3,3,3);
            morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
            morphs[3] = dom.createMorphAt(dom.childAt(element2, [5]),1,1);
            morphs[4] = dom.createElementMorph(element4);
            return morphs;
          },
          statements: [
            ["content","errorMsg",["loc",[null,[11,120],[11,132]]]],
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","username",["loc",[null,[12,55],[12,63]]]]],[],[]],"placeholder","Username","enter","login"],["loc",[null,[12,4],[12,103]]]],
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","password",["loc",[null,[15,55],[15,63]]]]],[],[]],"placeholder","Password","type","password","enter","login"],["loc",[null,[15,4],[15,119]]]],
            ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","remember",["loc",[null,[18,36],[18,44]]]]],[],[]]],["loc",[null,[18,4],[18,46]]]],
            ["element","action",["login"],[],["loc",[null,[20,49],[20,67]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 1
              },
              "end": {
                "line": 37,
                "column": 1
              }
            },
            "moduleName": "chart-r/templates/components/auth-manager.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("form");
            dom.setAttribute(el1,"class","form-inline auth-form");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","form-group");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("label");
            dom.setAttribute(el2,"class","checkbox");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" Remember me\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2,"type","button");
            dom.setAttribute(el2,"class","btn btn-default");
            var el3 = dom.createTextNode("Sign in");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [7]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
            morphs[3] = dom.createElementMorph(element1);
            return morphs;
          },
          statements: [
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","username",["loc",[null,[26,55],[26,63]]]]],[],[]],"placeholder","Username","enter","login"],["loc",[null,[26,4],[26,103]]]],
            ["inline","input",[],["class","form-control auth-user-field","value",["subexpr","@mut",[["get","password",["loc",[null,[29,55],[29,63]]]]],[],[]],"placeholder","Password","type","password","enter","login"],["loc",[null,[29,4],[29,119]]]],
            ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","remember",["loc",[null,[32,36],[32,44]]]]],[],[]]],["loc",[null,[32,4],[32,46]]]],
            ["element","action",["login"],[],["loc",[null,[34,49],[34,67]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 38,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/auth-manager.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","errorMsg",["loc",[null,[7,7],[7,15]]]]],[],0,1,["loc",[null,[7,1],[37,8]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 7
          }
        },
        "moduleName": "chart-r/templates/components/auth-manager.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","isLoggedIn",["loc",[null,[1,6],[1,16]]]]],[],0,1,["loc",[null,[1,0],[38,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/bs-accordion-item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-accordion-item.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["content","yield",["loc",[null,[10,8],[10,17]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/bs-accordion-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"role","tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2,"class","panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]),1,1);
        morphs[3] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["panel-heading ",["subexpr","if",[["get","collapsed",["loc",[null,[1,68],[1,77]]]],"collapsed","expanded"],[],["loc",[null,[1,63],[1,102]]]]]]],
        ["element","action",["toggleActive"],[],["loc",[null,[1,16],[1,41]]]],
        ["content","title",["loc",[null,[4,12],[4,21]]]],
        ["block","bs-collapse",[],["collapsed",["subexpr","@mut",[["get","collapsed",["loc",[null,[8,25],[8,34]]]]],[],[]],"class","panel-collapse"],0,null,["loc",[null,[8,0],[12,16]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/bs-alert', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "chart-r/templates/components/bs-alert.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1,"type","button");
            dom.setAttribute(el1,"class","close");
            dom.setAttribute(el1,"aria-label","Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"aria-hidden","true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [
            ["element","action",["dismiss"],[],["loc",[null,[3,59],[3,79]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-alert.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","dismissible",["loc",[null,[2,6],[2,17]]]]],[],0,null,["loc",[null,[2,0],[4,7]]]],
          ["content","yield",["loc",[null,[5,0],[5,9]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/bs-alert.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","unless",[["get","hidden",["loc",[null,[1,10],[1,16]]]]],[],0,null,["loc",[null,[1,0],[6,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/bs-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "chart-r/templates/components/bs-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","icon",["loc",[null,[1,24],[1,28]]]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "chart-r/templates/components/bs-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","icon",["loc",[null,[1,6],[1,10]]]]],[],0,null,["loc",[null,[1,0],[1,44]]]],
        ["content","text",["loc",[null,[1,44],[1,52]]]],
        ["content","yield",["loc",[null,[1,52],[1,61]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/bs-form-element', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "chart-r/templates/components/bs-form-element.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","partial",[["get","formElementTemplate",["loc",[null,[1,10],[1,29]]]]],[],["loc",[null,[1,0],[1,31]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/components/bs-form-group', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-form-group.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"aria-hidden","true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-control-feedback ",["get","iconName",["loc",[null,[3,41],[3,49]]]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "chart-r/templates/components/bs-form-group.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]],
        ["block","if",[["get","hasFeedback",["loc",[null,[2,6],[2,17]]]]],[],0,null,["loc",[null,[2,0],[4,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/bs-form', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "chart-r/templates/components/bs-form.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/components/bs-modal-dialog', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","bs-modal-header",[],["title",["subexpr","@mut",[["get","title",["loc",[null,[4,36],[4,41]]]]],[],[]],"closeButton",["subexpr","@mut",[["get","closeButton",["loc",[null,[4,54],[4,65]]]]],[],[]]],["loc",[null,[4,12],[4,67]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "chart-r/templates/components/bs-modal-dialog.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","yield",["loc",[null,[8,16],[8,25]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","bs-modal-body",[],[],0,null,["loc",[null,[7,12],[9,30]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","yield",["loc",[null,[11,12],[11,21]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","bs-modal-footer",["loc",[null,[15,12],[15,31]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "chart-r/templates/components/bs-modal-dialog.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(element1,2,2);
        morphs[3] = dom.createMorphAt(element1,4,4);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["modal-dialog ",["get","sizeClass",["loc",[null,[1,27],[1,36]]]]]]],
        ["block","if",[["get","header",["loc",[null,[3,14],[3,20]]]]],[],0,null,["loc",[null,[3,8],[5,15]]]],
        ["block","if",[["get","body",["loc",[null,[6,14],[6,18]]]]],[],1,2,["loc",[null,[6,8],[12,15]]]],
        ["block","if",[["get","footer",["loc",[null,[14,14],[14,20]]]]],[],3,null,["loc",[null,[14,8],[16,15]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('chart-r/templates/components/bs-modal-footer', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","this",["loc",[null,[2,12],[2,16]]]]],[],["loc",[null,[2,4],[2,18]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","closeTitle",["loc",[null,[5,52],[5,66]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","submitTitle",["loc",[null,[6,81],[6,96]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
            return morphs;
          },
          statements: [
            ["block","bs-button",[],["type","default","action","close"],0,null,["loc",[null,[5,8],[5,80]]]],
            ["block","bs-button",[],["type","primary","buttonType","submit","disabled",["subexpr","@mut",[["get","submitDisabled",["loc",[null,[6,65],[6,79]]]]],[],[]]],1,null,["loc",[null,[6,8],[6,110]]]]
          ],
          locals: [],
          templates: [child0, child1]
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["content","closeTitle",["loc",[null,[8,52],[8,66]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["block","bs-button",[],["type","primary","action","close"],0,null,["loc",[null,[8,8],[8,80]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","hasSubmitButton",["loc",[null,[4,10],[4,25]]]]],[],0,1,["loc",[null,[4,4],[9,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "chart-r/templates/components/bs-modal-footer.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasBlock",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[10,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/bs-modal-header', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"type","button");
          dom.setAttribute(el1,"class","close");
          dom.setAttribute(el1,"aria-label","Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"aria-hidden","true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["close"],[],["loc",[null,[2,59],[2,77]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","this",["loc",[null,[5,12],[5,16]]]]],[],["loc",[null,[5,4],[5,18]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal-header.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1,"class","modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","title",["loc",[null,[7,28],[7,37]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/bs-modal-header.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","closeButton",["loc",[null,[1,6],[1,17]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["block","if",[["get","hasBlock",["loc",[null,[4,6],[4,14]]]]],[],1,2,["loc",[null,[4,0],[8,7]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('chart-r/templates/components/bs-modal', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "chart-r/templates/components/bs-modal.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","this",["loc",[null,[4,10],[4,14]]]]],[],["loc",[null,[4,2],[4,16]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 10,
                "column": 0
              }
            },
            "moduleName": "chart-r/templates/components/bs-modal.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["modal-backdrop ",["subexpr","if",[["get","fade",["loc",[null,[9,34],[9,38]]]],"fade"],[],["loc",[null,[9,29],[9,47]]]]," ",["subexpr","if",[["get","in",["loc",[null,[9,53],[9,55]]]],"in"],[],["loc",[null,[9,48],[9,62]]]]]]],
            ["attribute","id",["concat",[["get","backdropId",["loc",[null,[9,70],[9,80]]]]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-modal.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
          return morphs;
        },
        statements: [
          ["block","bs-modal-dialog",[],["close",["subexpr","action",["close"],[],["loc",[null,[3,25],[3,41]]]],"fade",["subexpr","@mut",[["get","fade",["loc",[null,[3,47],[3,51]]]]],[],[]],"in",["subexpr","@mut",[["get","in",["loc",[null,[3,55],[3,57]]]]],[],[]],"id",["subexpr","@mut",[["get","modalId",["loc",[null,[3,61],[3,68]]]]],[],[]],"title",["subexpr","@mut",[["get","title",["loc",[null,[3,75],[3,80]]]]],[],[]],"closeButton",["subexpr","@mut",[["get","closeButton",["loc",[null,[3,93],[3,104]]]]],[],[]],"keyboard",["subexpr","@mut",[["get","keyboard",["loc",[null,[3,114],[3,122]]]]],[],[]],"header",["subexpr","@mut",[["get","header",["loc",[null,[3,130],[3,136]]]]],[],[]],"body",["subexpr","@mut",[["get","body",["loc",[null,[3,142],[3,146]]]]],[],[]],"footer",["subexpr","@mut",[["get","footer",["loc",[null,[3,154],[3,160]]]]],[],[]],"size",["subexpr","@mut",[["get","size",["loc",[null,[3,166],[3,170]]]]],[],[]],"backdropClose",["subexpr","@mut",[["get","backdropClose",["loc",[null,[3,185],[3,198]]]]],[],[]]],0,null,["loc",[null,[3,0],[5,20]]]],
          ["block","if",[["get","showBackdrop",["loc",[null,[8,6],[8,18]]]]],[],1,null,["loc",[null,[8,0],[10,7]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 19
          }
        },
        "moduleName": "chart-r/templates/components/bs-modal.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","ember-wormhole",[],["to","ember-bootstrap-modal-container","renderInPlace",["subexpr","@mut",[["get","_renderInPlace",["loc",[null,[1,69],[1,83]]]]],[],[]]],0,null,["loc",[null,[1,0],[13,19]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/bs-progress-bar', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "chart-r/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","percentRounded",["loc",[null,[4,16],[4,30]]]]],[],["loc",[null,[4,8],[4,32]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "chart-r/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["content","percentRounded",["loc",[null,[6,8],[6,26]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-progress-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","hasBlock",["loc",[null,[3,10],[3,18]]]]],[],0,1,["loc",[null,[3,4],[7,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "chart-r/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","percentRounded",["loc",[null,[10,38],[10,52]]]]],[],["loc",[null,[10,30],[10,54]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "chart-r/templates/components/bs-progress-bar.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","percentRounded",["loc",[null,[12,30],[12,48]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-progress-bar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","hasBlock",["loc",[null,[9,10],[9,18]]]]],[],0,1,["loc",[null,[9,4],[13,11]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/bs-progress-bar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","showLabel",["loc",[null,[2,6],[2,15]]]]],[],0,1,["loc",[null,[2,0],[15,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/bs-progress', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/bs-progress.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/components/bs-select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1,"disabled","");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1,1,1);
          return morphs;
        },
        statements: [
          ["attribute","selected",["subexpr","bs-not",[["get","value",["loc",[null,[2,39],[2,44]]]]],[],["loc",[null,[2,30],[2,46]]]]],
          ["content","prompt",["loc",[null,[3,8],[3,18]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/bs-select.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0,1,1);
          return morphs;
        },
        statements: [
          ["attribute","value",["concat",[["subexpr","bs-read-path",[["get","item",["loc",[null,[8,34],[8,38]]]],["get","optionValuePath",["loc",[null,[8,39],[8,54]]]]],[],["loc",[null,[8,19],[8,56]]]]]]],
          ["attribute","selected",["subexpr","bs-eq",[["get","item",["loc",[null,[9,29],[9,33]]]],["get","value",["loc",[null,[9,34],[9,39]]]]],[],["loc",[null,[9,21],[9,41]]]]],
          ["inline","bs-read-path",[["get","item",["loc",[null,[10,23],[10,27]]]],["get","optionLabelPath",["loc",[null,[10,28],[10,43]]]]],[],["loc",[null,[10,8],[10,45]]]]
        ],
        locals: ["item"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "chart-r/templates/components/bs-select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","prompt",["loc",[null,[1,6],[1,12]]]]],[],0,null,["loc",[null,[1,0],[5,7]]]],
        ["block","each",[["get","content",["loc",[null,[7,8],[7,15]]]]],["key","@identity"],1,null,["loc",[null,[7,0],[12,9]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/ember-table', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/ember-table.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","view",["header-table-container"],[],["loc",[null,[2,2],[2,35]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/ember-table.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","view",["footer-table-container"],[],["loc",[null,[6,2],[6,35]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/ember-table.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[4] = dom.createMorphAt(fragment,6,6,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasHeader",["loc",[null,[1,6],[1,15]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","view",["body-table-container"],[],["loc",[null,[4,0],[4,31]]]],
        ["block","if",[["get","hasFooter",["loc",[null,[5,6],[5,15]]]]],[],1,null,["loc",[null,[5,0],[7,7]]]],
        ["inline","view",["scroll-container"],[],["loc",[null,[8,0],[8,27]]]],
        ["inline","view",["column-sortable-indicator"],[],["loc",[null,[9,0],[9,36]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/form-element/errors', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/errors.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
          return morphs;
        },
        statements: [
          ["content","validationMessages.firstObject",["loc",[null,[2,29],[2,63]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "chart-r/templates/components/form-element/errors.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","showValidationMessages",["loc",[null,[1,6],[1,28]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/form-element/feedback-icon', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/feedback-icon.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"aria-hidden","true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["form-control-feedback ",["get","iconName",["loc",[null,[2,41],[2,49]]]]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "chart-r/templates/components/form-element/feedback-icon.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasFeedback",["loc",[null,[1,6],[1,17]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/form-element/horizontal/checkbox', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "chart-r/templates/components/form-element/horizontal/checkbox.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(element1,3,3);
        morphs[3] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[1,14],[1,38]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[1,43],[1,73]]]]]]],
        ["inline","input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[4,25],[4,29]]]]],[],[]],"type","checkbox","checked",["subexpr","@mut",[["get","value",["loc",[null,[4,54],[4,59]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,69],[4,77]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,87],[4,95]]]]],[],[]]],["loc",[null,[4,12],[4,97]]]],
        ["content","label",["loc",[null,[4,98],[4,107]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[7,4],[7,48]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/components/form-element/horizontal/default', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "chart-r/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","value",["loc",[null,[5,20],[5,25]]]],["get","formElementId",["loc",[null,[5,26],[5,39]]]],["get","validation",["loc",[null,[5,40],[5,50]]]]],[],["loc",[null,[5,12],[5,52]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "chart-r/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","bs-input",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[7,26],[7,39]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,45],[7,49]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[7,55],[7,66]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[7,73],[7,78]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[7,91],[7,102]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[7,113],[7,122]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[7,132],[7,140]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[7,150],[7,158]]]]],[],[]]],["loc",[null,[7,12],[7,160]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/horizontal/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1,0,0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2,1,1);
          morphs[5] = dom.createMorphAt(element2,3,3);
          morphs[6] = dom.createMorphAt(element2,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["get","horizontalLabelGridClass",["loc",[null,[2,34],[2,58]]]]," ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,66],[2,80]]]],"sr-only"],[],["loc",[null,[2,61],[2,92]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,101],[2,114]]]]]]],
          ["content","label",["loc",[null,[2,118],[2,127]]]],
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[3,18],[3,42]]]]]]],
          ["block","if",[["get","hasBlock",["loc",[null,[4,14],[4,22]]]]],[],0,1,["loc",[null,[4,8],[8,15]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[9,8],[9,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[10,8],[10,52]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "chart-r/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","yield",[["get","value",["loc",[null,[15,20],[15,25]]]],["get","formElementId",["loc",[null,[15,26],[15,39]]]],["get","validation",["loc",[null,[15,40],[15,50]]]]],[],["loc",[null,[15,12],[15,52]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "chart-r/templates/components/form-element/horizontal/default.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","bs-input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[17,28],[17,32]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[17,38],[17,49]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[17,56],[17,61]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[17,74],[17,85]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[17,96],[17,105]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[17,115],[17,123]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[17,133],[17,141]]]]],[],[]]],["loc",[null,[17,12],[17,143]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/horizontal/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(element0,3,3);
          morphs[3] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[13,18],[13,42]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[13,47],[13,77]]]]]]],
          ["block","if",[["get","hasBlock",["loc",[null,[14,14],[14,22]]]]],[],0,1,["loc",[null,[14,8],[18,15]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[19,8],[19,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[20,8],[20,52]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/horizontal/default.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[22,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/form-element/horizontal/select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/horizontal/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1,0,0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2,1,1);
          morphs[5] = dom.createMorphAt(element2,3,3);
          morphs[6] = dom.createMorphAt(element2,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["get","horizontalLabelGridClass",["loc",[null,[2,34],[2,58]]]]," ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,66],[2,80]]]],"sr-only"],[],["loc",[null,[2,61],[2,92]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,101],[2,114]]]]]]],
          ["content","label",["loc",[null,[2,118],[2,127]]]],
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[3,18],[3,42]]]]]]],
          ["inline","bs-select",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,23],[4,36]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,42],[4,46]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[4,55],[4,62]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[4,79],[4,98]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[4,115],[4,134]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,141],[4,146]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,156],[4,164]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,174],[4,182]]]]],[],[]]],["loc",[null,[4,8],[4,184]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,8],[5,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,8],[6,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/horizontal/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(element0,3,3);
          morphs[3] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[9,18],[9,42]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[9,47],[9,77]]]]]]],
          ["inline","bs-select",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[10,25],[10,29]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[10,38],[10,45]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[10,62],[10,81]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[10,98],[10,117]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,124],[10,129]]]]],[],[]]],["loc",[null,[10,8],[10,131]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[11,8],[11,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[12,8],[12,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/horizontal/select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[14,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/form-element/horizontal/textarea', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/horizontal/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1,0,0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2,1,1);
          morphs[5] = dom.createMorphAt(element2,3,3);
          morphs[6] = dom.createMorphAt(element2,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["get","horizontalLabelGridClass",["loc",[null,[2,34],[2,58]]]]," ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,66],[2,80]]]],"sr-only"],[],["loc",[null,[2,61],[2,92]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,101],[2,114]]]]]]],
          ["content","label",["loc",[null,[2,118],[2,127]]]],
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[3,18],[3,42]]]]]]],
          ["inline","bs-textarea",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,25],[4,38]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,44],[4,48]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,55],[4,60]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[4,73],[4,84]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[4,95],[4,104]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[4,110],[4,114]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[4,120],[4,124]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,134],[4,142]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,152],[4,160]]]]],[],[]]],["loc",[null,[4,8],[4,162]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,8],[5,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,8],[6,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/horizontal/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0,1,1);
          morphs[2] = dom.createMorphAt(element0,3,3);
          morphs[3] = dom.createMorphAt(element0,5,5);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",[["get","horizontalInputGridClass",["loc",[null,[9,18],[9,42]]]]," ",["get","horizontalInputOffsetGridClass",["loc",[null,[9,47],[9,77]]]]]]],
          ["inline","bs-textarea",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[10,27],[10,31]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[10,38],[10,43]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[10,56],[10,67]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[10,78],[10,87]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[10,93],[10,97]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[10,103],[10,107]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[10,117],[10,125]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[10,135],[10,143]]]]],[],[]]],["loc",[null,[10,8],[10,145]]]],
          ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[11,8],[11,59]]]],
          ["inline","partial",["components/form-element/errors"],[],["loc",[null,[12,8],[12,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/horizontal/textarea.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,1,["loc",[null,[1,0],[14,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('chart-r/templates/components/form-element/inline/checkbox', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "chart-r/templates/components/form-element/inline/checkbox.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["inline","input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[3,21],[3,25]]]]],[],[]],"type","checkbox","checked",["subexpr","@mut",[["get","value",["loc",[null,[3,50],[3,55]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[3,65],[3,73]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[3,83],[3,91]]]]],[],[]]],["loc",[null,[3,8],[3,93]]]],
        ["content","label",["loc",[null,[3,94],[3,103]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/components/form-element/inline/default', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/inline/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/inline/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","value",["loc",[null,[5,12],[5,17]]]],["get","formElementId",["loc",[null,[5,18],[5,31]]]],["get","validation",["loc",[null,[5,32],[5,42]]]]],[],["loc",[null,[5,4],[5,44]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/inline/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","bs-input",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[7,18],[7,31]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,37],[7,41]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[7,47],[7,58]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[7,65],[7,70]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[7,83],[7,94]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[7,105],[7,114]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[7,124],[7,132]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[7,142],[7,150]]]]],[],[]]],["loc",[null,[7,4],[7,152]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/inline/default.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["block","if",[["get","hasBlock",["loc",[null,[4,6],[4,14]]]]],[],1,2,["loc",[null,[4,0],[8,7]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[9,0],[9,51]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('chart-r/templates/components/form-element/inline/select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/inline/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/inline/select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-select",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,15],[4,28]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,34],[4,38]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[4,47],[4,54]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[4,71],[4,90]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[4,107],[4,126]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,133],[4,138]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,148],[4,156]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,166],[4,174]]]]],[],[]]],["loc",[null,[4,0],[4,176]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/form-element/inline/textarea', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/inline/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/inline/textarea.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-textarea",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,17],[4,30]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,36],[4,40]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,47],[4,52]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[4,65],[4,76]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[4,87],[4,96]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[4,102],[4,106]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[4,112],[4,116]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,126],[4,134]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,144],[4,152]]]]],[],[]]],["loc",[null,[4,0],[4,154]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/form-element/vertical/checkbox', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "chart-r/templates/components/form-element/vertical/checkbox.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","input",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[3,21],[3,25]]]]],[],[]],"type","checkbox","checked",["subexpr","@mut",[["get","value",["loc",[null,[3,50],[3,55]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[3,65],[3,73]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[3,83],[3,91]]]]],[],[]]],["loc",[null,[3,8],[3,93]]]],
        ["content","label",["loc",[null,[3,94],[3,103]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/components/form-element/vertical/default', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/vertical/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/vertical/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","yield",[["get","value",["loc",[null,[5,12],[5,17]]]],["get","formElementId",["loc",[null,[5,18],[5,31]]]],["get","validation",["loc",[null,[5,32],[5,42]]]]],[],["loc",[null,[5,4],[5,44]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/vertical/default.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","bs-input",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[7,18],[7,31]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[7,37],[7,41]]]]],[],[]],"type",["subexpr","@mut",[["get","controlType",["loc",[null,[7,47],[7,58]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[7,65],[7,70]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[7,83],[7,94]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[7,105],[7,114]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[7,124],[7,132]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[7,142],[7,150]]]]],[],[]]],["loc",[null,[7,4],[7,152]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/vertical/default.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["block","if",[["get","hasBlock",["loc",[null,[4,6],[4,14]]]]],[],1,2,["loc",[null,[4,0],[8,7]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[9,0],[9,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[10,0],[10,44]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('chart-r/templates/components/form-element/vertical/select', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/vertical/select.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/vertical/select.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-select",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,15],[4,28]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,34],[4,38]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[4,47],[4,54]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[4,71],[4,90]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[4,107],[4,126]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,133],[4,138]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,148],[4,156]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,166],[4,174]]]]],[],[]]],["loc",[null,[4,0],[4,176]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/components/form-element/vertical/textarea', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "chart-r/templates/components/form-element/vertical/textarea.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0,0,0);
          return morphs;
        },
        statements: [
          ["attribute","class",["concat",["control-label ",["subexpr","if",[["get","invisibleLabel",["loc",[null,[2,37],[2,51]]]],"sr-only"],[],["loc",[null,[2,32],[2,63]]]]]]],
          ["attribute","for",["concat",[["get","formElementId",["loc",[null,[2,72],[2,85]]]]]]],
          ["content","label",["loc",[null,[2,89],[2,98]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/components/form-element/vertical/textarea.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[3] = dom.createMorphAt(fragment,5,5,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
        ["inline","bs-textarea",[],["id",["subexpr","@mut",[["get","formElementId",["loc",[null,[4,17],[4,30]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[4,37],[4,42]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[4,48],[4,52]]]]],[],[]],"placeholder",["subexpr","@mut",[["get","placeholder",["loc",[null,[4,65],[4,76]]]]],[],[]],"autofocus",["subexpr","@mut",[["get","autofocus",["loc",[null,[4,87],[4,96]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[4,106],[4,114]]]]],[],[]],"required",["subexpr","@mut",[["get","required",["loc",[null,[4,124],[4,132]]]]],[],[]],"cols",["subexpr","@mut",[["get","cols",["loc",[null,[4,138],[4,142]]]]],[],[]],"rows",["subexpr","@mut",[["get","rows",["loc",[null,[4,148],[4,152]]]]],[],[]]],["loc",[null,[4,0],[4,154]]]],
        ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[5,0],[5,51]]]],
        ["inline","partial",["components/form-element/errors"],[],["loc",[null,[6,0],[6,44]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/footer-table-container', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "chart-r/templates/footer-table-container.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","view",["table-block"],["classNames","ember-table-left-table-block","content",["subexpr","@mut",[["get","footerContent",["loc",[null,[4,14],[4,27]]]]],[],[]],"columns",["subexpr","@mut",[["get","fixedColumns",["loc",[null,[5,14],[5,26]]]]],[],[]],"width",["subexpr","@mut",[["get","_fixedBlockWidth",["loc",[null,[6,12],[6,28]]]]],[],[]],"height",["subexpr","@mut",[["get","footerHeight",["loc",[null,[7,13],[7,25]]]]],[],[]]],["loc",[null,[3,4],[8,6]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/footer-table-container.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ember-table-table-fixed-wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["block","if",[["get","numFixedColumns",["loc",[null,[2,8],[2,23]]]]],[],0,null,["loc",[null,[2,2],[9,9]]]],
        ["inline","view",["table-block"],["classNames","ember-table-right-table-block","content",["subexpr","@mut",[["get","footerContent",["loc",[null,[11,12],[11,25]]]]],[],[]],"columns",["subexpr","@mut",[["get","tableColumns",["loc",[null,[12,12],[12,24]]]]],[],[]],"scrollLeft",["subexpr","@mut",[["get","_tableScrollLeft",["loc",[null,[13,15],[13,31]]]]],[],[]],"width",["subexpr","@mut",[["get","_tableBlockWidth",["loc",[null,[14,10],[14,26]]]]],[],[]],"height",["subexpr","@mut",[["get","footerHeight",["loc",[null,[15,11],[15,23]]]]],[],[]]],["loc",[null,[10,2],[16,4]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/header-cell', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "chart-r/templates/header-cell.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ember-table-content-container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2,"class","ember-table-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        return morphs;
      },
      statements: [
        ["element","action",["sortByColumn",["get","view.content",["loc",[null,[1,67],[1,79]]]]],[],["loc",[null,[1,43],[1,81]]]],
        ["content","view.content.headerCellName",["loc",[null,[3,4],[3,35]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/header-row', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/header-row.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","view",["multi-item-collection"],["content",["subexpr","@mut",[["get","view.content",["loc",[null,[2,10],[2,22]]]]],[],[]],"itemViewClassField","headerCellViewClass","width",["subexpr","@mut",[["get","controller._tableColumnsWidth",["loc",[null,[4,8],[4,37]]]]],[],[]]],["loc",[null,[1,0],[5,2]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/header-table-container', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "chart-r/templates/header-table-container.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","view",["header-block"],["classNames","ember-table-left-table-block","columns",["subexpr","@mut",[["get","fixedColumns",["loc",[null,[4,14],[4,26]]]]],[],[]],"width",["subexpr","@mut",[["get","_fixedBlockWidth",["loc",[null,[5,12],[5,28]]]]],[],[]],"height",["subexpr","@mut",[["get","headerHeight",["loc",[null,[6,13],[6,25]]]]],[],[]]],["loc",[null,[3,4],[7,6]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/header-table-container.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ember-table-table-fixed-wrapper");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["block","if",[["get","controller.numFixedColumns",["loc",[null,[2,8],[2,34]]]]],[],0,null,["loc",[null,[2,2],[8,9]]]],
        ["inline","view",["header-block"],["classNames","ember-table-right-table-block","columns",["subexpr","@mut",[["get","tableColumns",["loc",[null,[10,12],[10,24]]]]],[],[]],"scrollLeft",["subexpr","@mut",[["get","_tableScrollLeft",["loc",[null,[11,15],[11,31]]]]],[],[]],"width",["subexpr","@mut",[["get","_tableBlockWidth",["loc",[null,[12,10],[12,26]]]]],[],[]],"height",["subexpr","@mut",[["get","headerHeight",["loc",[null,[13,11],[13,23]]]]],[],[]]],["loc",[null,[9,2],[14,4]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('chart-r/templates/import-t', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/import-t.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/newfeature', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 33
          }
        },
        "moduleName": "chart-r/templates/newfeature.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("New Field: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \nComputed Field: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","newfield",["loc",[null,[1,11],[1,23]]]],
        ["content","computedField",["loc",[null,[2,16],[2,33]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/scroll-container', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/scroll-container.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","antiscroll-wrap");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","antiscroll-inner");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),1,1);
        return morphs;
      },
      statements: [
        ["inline","view",["scroll-panel"],[],["loc",[null,[3,4],[3,27]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/table-cell', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "chart-r/templates/table-cell.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","ember-table-content");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["content","view.cellContent",["loc",[null,[2,2],[2,22]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/templates/table-row', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "chart-r/templates/table-row.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","view",["multi-item-collection"],["row",["subexpr","@mut",[["get","view.row",["loc",[null,[2,6],[2,14]]]]],[],[]],"content",["subexpr","@mut",[["get","view.columns",["loc",[null,[3,10],[3,22]]]]],[],[]],"itemViewClassField","tableCellViewClass","width",["subexpr","@mut",[["get","controller._tableColumnsWidth",["loc",[null,[5,8],[5,37]]]]],[],[]]],["loc",[null,[1,0],[6,2]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('chart-r/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('chart-r/tests/components/auth-manager.jshint', function () {

  'use strict';

  module('JSHint - components');
  test('components/auth-manager.js should pass jshint', function() { 
    ok(true, 'components/auth-manager.js should pass jshint.'); 
  });

});
define('chart-r/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 943, col 21, \'day\' is defined but never used.\ncontrollers/application.js: line 957, col 21, \'monthLength\' is defined but never used.\n\n2 errors'); 
  });

});
define('chart-r/tests/controllers/newfeature.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/newfeature.js should pass jshint', function() { 
    ok(true, 'controllers/newfeature.js should pass jshint.'); 
  });

});
define('chart-r/tests/helpers/resolver', ['exports', 'ember/resolver', 'chart-r/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('chart-r/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('chart-r/tests/helpers/start-app', ['exports', 'ember', 'chart-r/app', 'chart-r/router', 'chart-r/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('chart-r/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('chart-r/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('chart-r/tests/routes/import-t.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/import-t.js should pass jshint', function() { 
    ok(true, 'routes/import-t.js should pass jshint.'); 
  });

});
define('chart-r/tests/routes/newfeature.jshint', function () {

  'use strict';

  module('JSHint - routes');
  test('routes/newfeature.js should pass jshint', function() { 
    ok(true, 'routes/newfeature.js should pass jshint.'); 
  });

});
define('chart-r/tests/test-helper', ['chart-r/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('chart-r/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('chart-r/tests/unit/components/auth-manager-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('auth-manager', 'Unit | Component | auth manager', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });

});
define('chart-r/tests/unit/components/auth-manager-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/auth-manager-test.js should pass jshint', function() { 
    ok(true, 'unit/components/auth-manager-test.js should pass jshint.'); 
  });

});
define('chart-r/tests/unit/controllers/application-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chart-r/tests/unit/controllers/application-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/application-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/application-test.js should pass jshint.'); 
  });

});
define('chart-r/tests/unit/controllers/newfeature-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:newfeature', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('chart-r/tests/unit/controllers/newfeature-test.jshint', function () {

  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/newfeature-test.js should pass jshint', function() { 
    ok(true, 'unit/controllers/newfeature-test.js should pass jshint.'); 
  });

});
define('chart-r/tests/unit/routes/import-t-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:import-t', 'Unit | Route | import t', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('chart-r/tests/unit/routes/import-t-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/import-t-test.js should pass jshint', function() { 
    ok(true, 'unit/routes/import-t-test.js should pass jshint.'); 
  });

});
define('chart-r/tests/unit/routes/newfeature-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:newfeature', 'Unit | Route | newfeature', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('computedField test', function (assert) {
    var route = this.subject();
    var newfield = controller.get('newfield');
    controller.set('newfield', 'test');
    assert.equal(controller.get('computedField'), 'test/');
  });

});
define('chart-r/tests/unit/routes/newfeature-test.jshint', function () {

  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/newfeature-test.js should pass jshint', function() { 
    ok(false, 'unit/routes/newfeature-test.js should pass jshint.\nunit/routes/newfeature-test.js: line 10, col 18, \'controller\' is not defined.\nunit/routes/newfeature-test.js: line 11, col 3, \'controller\' is not defined.\nunit/routes/newfeature-test.js: line 12, col 16, \'controller\' is not defined.\n\n3 errors'); 
  });

});
define('chart-r/utils/chart-object', ['exports', 'ember-cli-chartjs/utils/chart-object'], function (exports, chart_object) {

	'use strict';



	exports.default = chart_object.default;

});
define('chart-r/views/body-table-container', ['exports', 'ember-table/views/body-table-container'], function (exports, BodyTableContainer) {

	'use strict';

	exports['default'] = BodyTableContainer['default'];

});
define('chart-r/views/column-sortable-indicator', ['exports', 'ember-table/views/column-sortable-indicator'], function (exports, ColumnSortableIndicator) {

	'use strict';

	exports['default'] = ColumnSortableIndicator['default'];

});
define('chart-r/views/footer-table-container', ['exports', 'ember-table/views/footer-table-container'], function (exports, FooterTableContainer) {

	'use strict';

	exports['default'] = FooterTableContainer['default'];

});
define('chart-r/views/header-block', ['exports', 'ember-table/views/header-block'], function (exports, HeaderBlock) {

	'use strict';

	exports['default'] = HeaderBlock['default'];

});
define('chart-r/views/header-cell', ['exports', 'ember-table/views/header-cell'], function (exports, HeaderCell) {

	'use strict';

	exports['default'] = HeaderCell['default'];

});
define('chart-r/views/header-row', ['exports', 'ember-table/views/header-row'], function (exports, HeaderRow) {

	'use strict';

	exports['default'] = HeaderRow['default'];

});
define('chart-r/views/header-table-container', ['exports', 'ember-table/views/header-table-container'], function (exports, HeaderTableContainer) {

	'use strict';

	exports['default'] = HeaderTableContainer['default'];

});
define('chart-r/views/lazy-table-block', ['exports', 'ember-table/views/lazy-table-block'], function (exports, LazyTableBlock) {

	'use strict';

	exports['default'] = LazyTableBlock['default'];

});
define('chart-r/views/multi-item-collection', ['exports', 'ember-table/views/multi-item-collection'], function (exports, MultiItemCollection) {

	'use strict';

	exports['default'] = MultiItemCollection['default'];

});
define('chart-r/views/scroll-container', ['exports', 'ember-table/views/scroll-container'], function (exports, ScrollContainer) {

	'use strict';

	exports['default'] = ScrollContainer['default'];

});
define('chart-r/views/scroll-panel', ['exports', 'ember-table/views/scroll-panel'], function (exports, ScrollPanel) {

	'use strict';

	exports['default'] = ScrollPanel['default'];

});
define('chart-r/views/table-block', ['exports', 'ember-table/views/table-block'], function (exports, TableBlock) {

	'use strict';

	exports['default'] = TableBlock['default'];

});
define('chart-r/views/table-cell', ['exports', 'ember-table/views/table-cell'], function (exports, TableCell) {

	'use strict';

	exports['default'] = TableCell['default'];

});
define('chart-r/views/table-row', ['exports', 'ember-table/views/table-row'], function (exports, TableRow) {

	'use strict';

	exports['default'] = TableRow['default'];

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('chart-r/config/environment', ['ember'], function(Ember) {
  var prefix = 'chart-r';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("chart-r/tests/test-helper");
} else {
  require("chart-r/app")["default"].create({"name":"chart-r","version":"0.0.0.6be07ff4"});
}

/* jshint ignore:end */
//# sourceMappingURL=chart-r.map