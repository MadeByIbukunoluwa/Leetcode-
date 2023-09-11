public class MedianFinder
{
    private PriorityQueue<int, int> minHeap = new(); // ascending comparsion a - b 
    private PriorityQueue<int, int> maxHeap = new(Comparer<int>.Create((a, b) => b - a)); //descending comparison b - a

    public MedianFinder()
    {

    }

    public void AddNum(int num)
    {
        if (minHeap.Count == 0 || num > minHeap.Peek())
        {
            minHeap.Enqueue(num, num);
        }
        else
        {
            maxHeap.Enqueue(num, num);
        }
        Balance();
    }
    public void Balance()
    {
        // the heaps are balanced if the maxHeapSize == minHeapSize + 1;
        var (big, small) = maxHeap.Count > minHeap.Count
            ? (maxHeap, minHeap)
            : (minHeap, maxHeap);

        while (big.Count - small.Count > 1)
        {
            var value = big.Dequeue();
            small.Enqueue(value, value);
        }
    }
    public double FindMedian()
    {
        if (minHeap.Count == maxHeap.Count)
        {
            return (minHeap.Peek() + maxHeap.Peek()) / 2.0;
        }
        else
        {
            return minHeap.Count > maxHeap.Count
            ? minHeap.Peek()
            : maxHeap.Peek();
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.AddNum(num);
 * double param_2 = obj.FindMedian();
 */