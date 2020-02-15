export default class Device{
    id: string;
    canvas_location: CanvasLocation;
    real_location: RealLocation;
    dev_eui: String;
}
class CanvasLocation{
    x: number;
    y: number;
}
class RealLocation{
    sector: string;
    identifier: number;
}