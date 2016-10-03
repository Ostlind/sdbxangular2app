export class OpcTag {

    public TagName: string;
    public ScanTime: number;
    public Value: string;
    public Quality: string;
    public DataType?: number;

  constructor(
    public tagName: string,
    public scanTime: number,
    public value: string,
    public quality: string,
    public dataType?: number ) {


      this.TagName  = tagName;
      this.ScanTime = scanTime;
      this.Value    = value;
      this.Quality  = quality;
      this.DataType = dataType;
  }


}

export class SignalrWindow extends Window {
    $: any;
}

export enum ConnectionState {
    Connecting = 1,
    Connected = 2,
    Reconnecting = 3,
    Disconnected = 4
}

export class OpcConfig {
    url: string;
    hubName: string;
    clientName: string;
    opcTagList: OpcTag[];

}

export class ChannelEvent {
    Name: string;
    ChannelName: string;
    Timestamp: Date;
    Data: any;
    Json: string;

    constructor() {
        this.Timestamp = new Date();
    }
}
