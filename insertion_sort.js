var a =[2,3,5,8,6,9,1];
var temp;
var len= a.length;
var i=0;
var j=1;
for(i=1;i<len;i++)
{
	
	for(j=i;j>0;j--)
		if(a[j-1] > a[j])
		{
			temp=a[j-1];
			a[j-1]=a[j];
			a[j]=temp;
		}
		
}


console.log(a);
