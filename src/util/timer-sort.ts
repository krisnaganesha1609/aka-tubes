//[FROM: github.com/fairuztsn]

export default function timer<T extends (...args: any[]) => any>(func: T): (...args: Parameters<T>) => { result: ReturnType<T>, time: number } {
    return function (...args: Parameters<T>): { result: ReturnType<T>, time: number } {
        let result: ReturnType<T>;

        const start = performance.now();

        
        result = func(...args)
        

        const end = performance.now();
        const totalDurationMs = end - start;
        const avgDurationNs = ((totalDurationMs * 1_000_000)).toFixed(2);

        //@ts-ignore
        return { result: result, time: avgDurationNs };
    };
}