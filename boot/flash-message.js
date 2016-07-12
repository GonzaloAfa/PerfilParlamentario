angular.module("flashMessage", [])
	.factory("$flash", ['ngToast',
		function (ngToast) {
			return {
				setMessage: function (message) {
					ngToast.create({
						className: 'success',
						content: message,
						timeout: 4000,
						animation: 'fade'
					});
				},

				errorMessage: function (message) {
					ngToast.create({
						className: 'warning',
						content: message,
						timeout: 4000,
						animation: 'fade'
					});
				}

			};
		}
	])

; //EOF