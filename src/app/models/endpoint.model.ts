export class EndpointResponse {
    buttons: number[];
    bars: number[];
    limit: number;

    // barTypes: string[];

    // barObjects: barObject[] = [];
}

export class BarObject {
    barSize: number;
    barType: string;
}

// {"buttons":[25,39,-29,-20],"bars":[24,21],"limit":200}