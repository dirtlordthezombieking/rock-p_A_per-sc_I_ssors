let loaded=false;
function chose(id)
{
	if(!loaded)
	{
		return;
	}
}
let data=
[
	0,0,0,
	0,0,0,
	0,0,0,
	0,0,0,
	0,0,0
];
let nodeData=
{
	weights2:
	[
//data types
		[0.5,0.5,0.5],
		[0.5,0.5,0.5],
		[0.5,0.5,0.5],
		[0.5,0.5,0.5],
		[0.5,0.5,0.5],
//rurn
		[0.5,0.5,0.5,0.5],
		[0.5,0.5,0.5,0.5],
		[0.5,0.5,0.5,0.5],
//all
		[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]
	],
	add2:[0,0,0,0,0,0,0,0,0],
	weights3:
	[
		[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
		[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
		[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]
	],
	add3:[0,0,0];
}
let layer2Data=
[
//data type
	[ 0, 1, 2],)
	[ 3, 4, 5],
	[ 6, 7, 8],
	[ 9,10,11],
	[12,13,14],
//turn
	[0,3,6, 9],
	[1,4,7,10],
	[2,5,8,11],
//all
	[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
];
let pwc=0.0;
function mutate()
{
	for(let n=0;n<5;n++)
	{
		for(let w=0;w<3;w++)
		{
			if(Math.random()>0.9)
			{
				weights2[n][w]+=Math.random()-0.5;
			}
		}
	}
	for(let n=5;n<8;n++)
	{
		for(let w=0;w<4;w++)
		{
			if(Math.random()>0.9)
			{
				weights2[n][w]+=Math.random()-0.5;
			}
		}
	}
	for(let w=0;w<15;w++)
	{
		if(Math.random()>0.9)
		{
			weights2[8][w]+=Math.random()-0.5;
		}
	}
	for(let n=0;n<3;n++)
	{
		for(let w=0;w<9;w++)
		{
			if(Math.random()>0.9)
			{
				weights3[n][w]+=Math.random()-0.5;
			}
		}
	}
}




//p-1
//p-2
//p-3
//a-1
//a-2
//a-3
//w-1
//w-2
//w-3
//c-1
//c-2
//c-3
//wt
//lt
//tt

//p
//a
//w
//c
//t
//-1
//-2
//-3
//all

//rock confidence
//paper confidentce
//scissors confidence
loaded=true;