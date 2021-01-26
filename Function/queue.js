let Queue = function () {
    this.queue = []
    this.task = (delay, fn) => {
        this.queue.push({ delay, fn })
        return this
    }
    this.start = () => {
        let node = this.queue.shift()
        setTimeout(() => {
            node.fn()
            this.queue.length && this.start()
        }, node.delay)
        return this
    }
}

let queue = new Queue()

queue.task(1000, () => {
    console.log('task1')
})

queue.task(2000, () => {
    console.log('task2')
})

queue.task(1000, () => {
    console.log('task3')
})

queue.start()

queue
    .task(1000, () => {
        console.log('task1')
    })
    .task(2000, () => {
        console.log('task2')
    })
    .start()
