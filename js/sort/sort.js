/*插入排序
*基本思路
* 从无序区的第一个元素开始和它前面有序区的元素进行比较，如果比前面的元素小，那么前面的元素向后移动，否则就将此元素插入到相应的位置
* /
Array.method('insertSort',function(){
	var len=this.length,i,j,tmp;
	for(i=1;i<len;i++){
		tmp=this[i];
		j=i-1;
		while(j>=0 && tmp<this[j]){
			this[j+1]=this[j];
			j--;
		}
		this[j+1]=tmp;
	}
	return this;
});
/*二分插入排序
 * 先在有序区通过二分查找的方法找到移动元素的起始位置，然后通过这个起始位置将后面所有的元素后移
 */

/*
 * 希尔排序
 * 在第i次时取gap=n/(2的i次方),然后将数组分为gap组（从下标0开始。每相邻的gap个元素为一组），接下来我们对每一组进行直接插入排序
 */

/*
 * 冒泡排序
 * 通过在无序区的相邻元素的比较和替换，使较小的元素浮到最上面。
 */
/*
 * 改进的冒泡排序
 * 如果在某次的排序中没有出现交换的情况，那么说明在无序的元素现在已经是有序了，就可以直接返回了
 */
/*
 * 快速排序
 * 1、假设第一个元素为基准元素
 * 2、把所有比基准元素小的记录放置在前一部分，把所有比基准元素大的记录放置在后一部分，并把基准元素放在这两部分的中间（i=j的位置）
 */
/*
 * 选择排序
 * 在无序区中选出最小的元素，然后将它和无序区的第一个元素交换位置
 *
 */
/*
 * 堆排序
 * 堆排序是一种树形选择排序方法（注意下标是从1开始的，也就是R[1...N]）
 * 1）初始堆
 * 将原始数组调整成大根堆的方法：筛选算法：
 * 比较R[2i]、R[2i+1]和R[i],将最大者放在R[i]的位置上（递归调用此方法到结束）
 * 2）堆排序
 * 每次将堆顶元素与数组最后面的且没有被置换的元素互换
 */
/*
 * 归并排序
 * 1、归并
 * 从两个有序表R[low...mid]和R[mid+1...high],每次从左边以此取出一个数进行比较，将较小者放入tmp数组中，最后将两段中剩下的部分直接复制到tmp中。
 * 这样tmp是一个有序表，再将它复制加R中。（其中要考虑最后一个子表的长度不足length的情况）
 * 2、排序
 * 自底向上的归并，第一回：length=1；第二回：length=2*length...
 */