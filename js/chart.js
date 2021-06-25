var years = [2015,2016,2017,2018,2019,2020];
	var gdp = [5.5,6.9,3.4,8,12,9];
	var ifr = [10,8,12,9,13,8];

	var provinces = ["VTE","PHO","SVN","LPB"];
	var pop = [820000,580000,640000,730000];
	var province2 = ["VTE","PHO","LNT","BOK","ODX","XBL","LPB","XEK","HOP","VTP","BKX","KHM","SVK","SVN","XEK","CHP","ATP","XSB"];

	var b_2019 = [4,5,7,4,9,7,9,6,7,10,5,6,15,4,2,11,4,2];
	var b_2020= [6,7,9,6,11,9,11,8,9,12,7,8,17,6,4,13,6,4];

	console.log(province2,b_2019,b_2020);

	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx,{
		type: "line", //chart type 
		data:{ 
			//dataset and options 
			labels: years,
			datasets:[{
				label: "GDP growth Rate",
				data:gdp,
				borderColor:"#ec1009",
				fill:false,
				lineTension:0,
			}]
		},
		plugins: [ChartDataLabels],
		options:{
			plugins:{
				datalabels:{
					anchor:"end",
					align:"top",
				}
			},
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						//stepSize:2,
						maxTicksLimit:6
					},
					gridLines:{
						borderDash: [4, 3],
						
					}
				}],
				xAxes:[{
					gridLines:{
						borderDash: [4, 3],
					}
				}]
			},
			legend:{
				display:false,
			}
		}
		

	});//end of myChart 

	var ctx = document.getElementById("barChart");
	var barChart = new Chart(ctx,{
		type: "bar",
		data:{
			labels: years,
			datasets:[{
				label:"Inflation rate",
				data:ifr,
				backgroundColor:["#1a3bf6","#f6ad1a","#FF5733","#1ba430","#f321da","#2aa6d1"],
			}]

		},
		plugins: [ChartDataLabels],
		options:{
			plugins:{
				datalabels:{
					anchor:"end",
					align:"top",
				}
			},
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:6
					},
					gridLines:{
						borderDash: [4, 3],
						
					}
				}],
				xAxes:[{
					gridLines:{
						borderDash: [4, 3],
						
					}
				}]
			},
			legend:{
				display:false,
			}
		}

	});//end bar chart 

	var ctx = document.getElementById("pieChart");
	var pieChart = new Chart(ctx,{
		type:"pie",
		data:{
			labels: years,
			datasets:[{
				label: "IFR",
				data:ifr,
				backgroundColor:["#1a3bf6","#f6ad1a","#FF5733","#1ba430","#f321da","#2aa6d1"],
			}]
		},
		options:{
			legend:{
				position:"left",
			},
			labels:{
				fontColor:"#ff0000",
			}
		}
		
	});//end pie

	var ctx = document.getElementById("pChart");
	var pChart = new Chart(ctx,{
		type: "horizontalBar",
		data:{
			labels:provinces,
			datasets:[{
				label:"Poppulation",
				data: pop,
				backgroundColor:'rgb(32,178,170,0.4)',
			}]
		},
		options: {
		  scales: {
		    xAxes: [{
		      gridLines: {
		        display: false,
		        drawBorder: false,
		      },
		      ticks: {
		        display: true,
		        maxTicksLimit:5,
		      }
		    }],
		    yAxes: [{
		      gridLines: {
		        display: false,
		        drawBorder: false
		      },
		      ticks: {
		        mirror: true,
		        fontSize: 12,
		        padding: -10
		      }
		    }],
		  },
		  legend:{
		  	display:false,
		  }
		  
		}


	});

	var ctx = document.getElementById("bChart");
	var bChart = new Chart(ctx,{

		type:"bar",
		data:{
			labels: province2,
			datasets:[{
				label:"Birth rate 2019",
				data:b_2019,
				backgroundColor:"#1e90ff",
			},
			{
				label:"Birht rate 2020",
				data:b_2020,
				backgroundColor:"#4169e1",	
			}]
		},
		//plugins: [ChartDataLabels],
		options:{
			// plugins:{
			// 	datalabels:{
			// 		anchor:"end",
			// 		align:"top",
			// 	}
			// },
			scales:{
				yAxes:[{
					ticks:{
						beginAtZero:true,
						stepSize:2,
						maxTicksLimit:7,
					},
					gridLines:{
						borderDash: [4, 3],
						
					}
				}],
				xAxes:[{
					gridLines:{
						borderDash: [4, 3],
						
					}
				}]
			},
			legend:{
				labels:{
					 fontColor:"#000000",
					 //fontStyle:"bold",
				},

			}
		}


	});
