export interface ISimpleMaskMoneyArgs {
  afterFormat?: (e: string) => {}; 
  allowNegative?: boolean | false;  
  beforeFormat?: (e: string) => {};  
  negativeSignAfter?: boolean | false;
  decimalSeparator?: string | ',';
  fixed?: boolean | true;
  fractionDigits?: number | 2;
  prefix?: string | '';
  suffix?: string | '';
  thousandsSeparator?: string | '.';
  cursor?: 'start' | 'move' | 'end';
}

declare class SimpleMaskMoney {
  public static args: ISimpleMaskMoneyArgs;
  public static formatToCurrency(value: number | string, args?: ISimpleMaskMoneyArgs): string;
  public static formatToMask(value: number | string, args?: ISimpleMaskMoneyArgs): string;
  public static formatToNumber(value: string | number, args?: ISimpleMaskMoneyArgs): number;
  public static setMask(element: string | HTMLInputElement, args?: ISimpleMaskMoneyArgs): HTMLInputElement;
}

declare module 'simple-mask-money' {
  export = SimpleMaskMoney;
}

