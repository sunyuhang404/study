
export class MinHeap {
  constructor() {
    this.heap = []
  }

  // 获取父节点索引 ((i - 1) / 2)
  parent(index) {
    return Math.floor((index - 1) / 2)
  }

  // 获取左子节点索引 (2 * i + 1)
  leftChild(index) {
    return 2 * index + 1
  }

  // 获取右子节点索引 (2 * i + 2)
  rightChild(index) {
    return 2 * index + 2
  }

  // 交换两个节点位置
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }

  // 上浮
  bubbleUp(index) {
    if (index === 0) {
      return
    }
    const parentIndex = this.parent(index)
    if (this.heap[parentIndex] && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex,index)
      this.bubbleUp(parentIndex)
    }
    // 如果节点的值比父节点小, 就交换当前节点和父节点的索引
    // while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
    //   this.swap(index, this.parent(index))
    //   index = this.parent(index)
    // }
  }

  // 下沉
  bubbleDown(index) {
    // 初始化为当前节点的索引
    let smallest = index;
    // 左子节点索引
    const left = this.leftChild(index);
    // 右子节点索引
    const right = this.rightChild(index);

    // 比较左子节点
    // 检查左子节点的索引是否在堆的范围内:left < this.heap.length
    // 如果左子节点的值比当前节点的值(目前已知最小的)小, 更新 smallest 的值为左子节点的索引
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    // 比较右子节点
    // 检查右子节点的值是否在堆的范围内: right < this.heap.length
    // 如果右子节点的值比当前节点的值(目前已知最小的)小, 更新 samllest 的值为右子节点的索引
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    // 如果 smallest 不等于当前节点的索引, 交换并递归调用下沉函数
    if (smallest !== index) {
      this.swap(index, smallest);
      this.bubbleDown(smallest);
    }
  }

  // 插入元素
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // 删除并返回最小元素
  extractMin() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty!')
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    // 取出堆顶元素, 将堆中最后一个元素放到堆顶,然后执行下沉
    const min = this.heap[0]
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  // 查看最小元素
  peek() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty!')
    }
    return this.heap[0]
  }

  // 检查是否为空
  isEmpty() {
    return this.heap.length === 0;
  }
}

// 优先级队列
export class PriorityQueue {
  constructor() {
    this.minHeap = new MinHeap()
  }

  // 插入元素
  enqueue(value) {
    this.minHeap.insert(value)
  }

  // 删除并返回优先级最高的元素
  dequeue() {
    return this.minHeap.extractMin()
  }

  // 查看优先级最高的元素
  peek() {
    return this.minHeap.peek();
  }

  // 检查队列是否为空
  isEmpty() {
    return this.minHeap.isEmpty();
  }
}

// 使用示例
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(8);
pq.enqueue(1);

// console.log(pq.dequeue()); // 输出: 1
// console.log(pq.peek());    // 输出: 3
// console.log(pq.dequeue()); // 输出: 3
// console.log(pq.isEmpty()); // 输出: false