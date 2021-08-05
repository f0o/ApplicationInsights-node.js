export class NetworkStatsbeat {

    public time: number;

    public lastTime: number;

    public category: number;

    public endpoint: string;

    public totalRequestCount: number;

    public lastRequestCount: number;

    public totalSuccesfulRequestCount: number;

    public totalFailedRequestCount: number;

    public retryCount: number;

    public exceptionCount: number;

    public throttleCount: number;

    public intervalRequestExecutionTime: number;

    public lastIntervalRequestExecutionTime: number;

    constructor(category: number, endpoint: string) {
        this.category = category;
        this.endpoint = endpoint;
        this.totalRequestCount = 0;
        this.totalSuccesfulRequestCount = 0;
        this.totalFailedRequestCount = 0;
        this.retryCount = 0;
        this.exceptionCount = 0;
        this.throttleCount = 0;
        this.intervalRequestExecutionTime = 0;
        this.lastIntervalRequestExecutionTime = 0;
        this.lastTime = +new Date;
        this.lastRequestCount = 0;
    }
}