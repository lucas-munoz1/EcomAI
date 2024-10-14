/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);

        // ENGINE DROPDOWNS 
        // Select all buttons with the class 'engine-toggle'
        var $toggles = $('.engine-toggle');

        $toggles.each(function() {
            $(this).on('click', function() {
                // Find the parent <h3> element and then the next sibling
                var $content = $(this).parent().next();
				var $icon = $(this).find('.toggle-icon');

                // Check if the next sibling has the class 'engine-dropdown'
                if ($content.hasClass('engine-dropdown')) {
                    // Toggle the display property
                    $content.slideToggle(300);
					$icon.toggleClass('rotated');
                }
            });
        });
    });
	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
		$window.on('load', function() {

			// $('#two').poptrox({
			// 	caption: function($a) { return $a.next('h3').text(); },
			// 	overlayColor: '#2c2c2c',
			// 	overlayOpacity: 0.85,
			// 	popupCloserText: '',
			// 	popupLoaderText: '',
			// 	selector: '.work-item a.poptrox',
			// 	usePopupCaption: true,
			// 	usePopupDefaultStyling: false,
			// 	usePopupEasyClose: false,
			// 	usePopupNav: true,
			// 	windowMargin: (breakpoints.active('<=small') ? 0 : 50)
			// });

			// // Unbind Poptrox events from modal triggers
			// $('.modal-trigger').off('click.poptrox');
	
			// Function to open the modal
			function openModal(modalId) {
				$('#' + modalId).css('display', 'block');
			}
			
			// Function to close the modal
			function closeModal(modalId) {
				$('#' + modalId).css('display', 'none');
			}
			
			// Event Listeners for Open
			$('a[data-modal]').on('click', function(event) {
				event.preventDefault();
				event.stopPropagation(); // Prevent event bubbling to Poptrox
				var modalId = $(this).attr('data-modal');
				openModal(modalId);
			});
			
			// Event Listeners for Close
			$('.close-modal[data-modal]').on('click', function() {
				var modalId = $(this).attr('data-modal');
				closeModal(modalId);
			});
			
			// Optional: Close modal when clicking outside the content
			$(window).on('click', function(event) {
				if ($(event.target).hasClass('modal')) {
				$(event.target).css('display', 'none');
				}
			});
			
			// Optional: Close modal with Escape key
			$(document).on('keydown', function(event) {
				if (event.key === 'Escape') {
				$('.modal').css('display', 'none');
				}
			});
		});
	
	})(jQuery);