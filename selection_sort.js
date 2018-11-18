var a =[2,3,5,8,6,9,1];
var temp;
var len= a.length;
var i=0;
var j=1;
var min=0;
for( i =0;i<len-1;i++){
	for( j=i ; j<len;j++ ){
		if(a[i]>a[j])
		{
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
			console.log(a);
		}
	}
}
console.log(a);
