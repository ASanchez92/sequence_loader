$(document).ready( function() {

	var initialize = function()
	{
		setColHeight();
		buildGrid();
		animateBoxes();
	} 

	var setColHeight = function()
	{
		// Calculate the width of each evenly spaced column and set height to equal amount
		var colWidth = $('.eight-col-grid').outerWidth();
		$('.eight-col-grid').css('height', colWidth);
	}

	function buildGrid()
	{
		$('.gif-container').append("<div class="col-sm-12"><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div><div class="row"><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div><div class="eight-col-grid"><div class="white-box hide"></div></div></div></div>");
	}

	var animateBoxes = function()
	{
		var box = 0;
		var i = 0;
		var j = 0;
		var currentInterval = 0;
		var sequence, boxElement, isLeftRight;
		var cycleSpeed = 10;
		var numCol = $('.gif-container .col-sm-12 .row:nth-of-type(1) .eight-col-grid').length;
		var numRow = $('.gif-container .col-sm-12 .row').length;

		// subtracting one since this is used to determine the max index of tempArray
		var maxBoxes = $('.gif-container .col-sm-12 .row .eight-col-grid').length - 1;

		var tempArray = [];

		// Letter A
		var	arrayLetters = [
				false, false, false, true, true, false, false, false, 
			    false, false, true, true, true, true, false, false,
			    false, true, true, false, false, true, true, false,
			    false, true, true, false, false, true, true, false,
			    true, true, false, false, false, false, true, true, 
			    true, true, false, false, false, false, true, true,
			    true, true, true, true, true, true, true, true,
			    true, true, true, true, true, true, true, true,
			    true, true, false, false, false, false, true, true, 
			    true, true, false, false, false, false, true, true, 
			    true, true, false, false, false, false, true, true
			];

		sequence = setInterval(sequenceArrayRight, cycleSpeed);

		// Runs character sequence on grid
		function sequenceArrayDown()
		{
			isLeftRight = false;

			runArray();
			getTempArray();

			// Reset grid variables once full cycle completes
			if (box % maxBoxes == 0  && box != 0)
			{
				currentInterval++;
				clearValues();
				toggleSequence();
			}
			
			box++;
		}

		function sequenceArrayRight()
		{
			isLeftRight = true;

			runArray();
			getTempArray();
			cycleRight();
		}

		function cycleRight()
		{
			box += numCol;
			i++;

			if (i % numRow == 0 && i != 0)
			{
				j++;
				box = j;

				if (j == numCol)
				{
					currentInterval++;

					clearValues();
					toggleSequence();
				}
			}
		}

		function sequenceArrayUp()
		{
			isLeftRight = false;
			box = maxBoxes - i;

			// Reset grid variables once full cycle completes
			if (i % maxBoxes == 0 && i != 0)
			{
				currentInterval++;

				clearValues();
				toggleSequence();

				i = 0;
				box = maxBoxes - i;
			}

			runArray();
			getTempArray();

			i++;
		}

		// Runs clear sequence to wipe grid
		function clearArray()
		{
			if (isLeftRight)
			{
				runTempArray();
				cycleRight();
			}

			else
			{
				runTempArray();

				// Reset grid variables once full cycle completes
				if (box % maxBoxes == 0 && box != 0)
				{
					currentInterval++;
					clearValues();
					toggleSequence();
				}

				// Clear tempArray at the end of cycle to record new array
				else if (box % maxBoxes == 0)
					tempArray = [];
				
				box++;
			}
		}

		// toggles between character sequence and clear sequence
		function toggleSequence()
		{
			// if currentInterval is even, run character sequence, otherwise run clear sequence
			if (currentInterval % 2 == 0)
				sequence = setInterval(sequenceArrayRight, cycleSpeed);

			else
				sequence = setInterval(clearArray, cycleSpeed);
		}

		function clearValues()
		{
			box = 0;
			j = 0;
			i = 0;

			clearInterval(sequence);
		}

		// Record values of current array and store them to tempArray
		function getTempArray()
		{
			boxElement = $('.gif-container .col-sm-12 .row .white-box').eq(box);

			if (boxElement.hasClass('hide'))
			{
				tempArray.push(false);
			}				

			else
			{
				tempArray.push(true);
			}
		}

		// Toggles boxes for character sequence
		function runArray()
		{
			boxElement = $('.gif-container .col-sm-12 .row .white-box').eq(box);

			if (arrayLetters[box] == true)
			{
				boxElement.toggleClass('hide');
			}
		}

		//Toggles boxes for clear sequence
		function runTempArray()
		{
			boxElement = $('.gif-container .col-sm-12 .row .white-box').eq(box);

			if (isLeftRight)
			{
				if (tempArray[i] == true)
				{
					boxElement.toggleClass('hide');
				}
			}

			else
			{
				if (tempArray[box] == true)
				{
					boxElement.toggleClass('hide');
				}
			}
		}
	}

	initialize();
});