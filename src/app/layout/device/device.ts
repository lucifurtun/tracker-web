export class Position {
    lat: number;
    lng: number;
}


export class Device {
    id: number;
    serialNumber: string;
    latestPosition: Position;
}
