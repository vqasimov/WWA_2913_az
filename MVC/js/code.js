/* ---------------------------- begin view ----------------------------- */
	let view = {
		showNumber: function(n) {
			let el = document.getElementById("showResult");
			el.innerHTML = n;
		}
	};

/* ---------------------------- begin model ---------------------------- */
	let model = {
		number: 0,

		calculate: function (x, y) {
			this.number = x * y;
			return this.number;
		}
	};

/* -------------------------- begin controller ------------------------- */
	let controller = {
		handleClick: function () {
			let result = model.calculate(3, 6);
			view.showNumber(result);
		}

	};

/* --------------------- anonymous initialize function ----------------- */
	(function() {
		let app = {
			init: function () {
				this.main();
				this.event();
			},
			main: function () {

			},
			event: function () {
				let el = document.getElementById("calcUser");
				el.onclick = controller.handleClick;
			}

		};
		
		app.init();
	})();