/**
 * ``Phaser.Geom.Rectangle``をとりまとめる
 */
export class RectangleGroupe{

	private _rectangles: Map<string,Phaser.Geom.Rectangle>

	
	public get rectAngles() :  Map<string,Phaser.Geom.Rectangle> {
		return this._rectangles;
	}
	

	constructor(rectangleMap:Map<string,Phaser.Geom.Rectangle> = new Map<string,Phaser.Geom.Rectangle>()){
		this._rectangles = rectangleMap;
	}

	/**
	 * Rectangleを追加する
	 * @param key Rectangleを識別するためのKey
	 * @param rectangle Rectangleのインスタンス
	 */
	add(key: string, rectangle: Phaser.Geom.Rectangle){
		this._rectangles.set(key, rectangle)
	}

	/**
	 * 引数のKeyで登録されているRectangleを取得する
	 * @param key Rectangleを識別するためのKey
	 * @returns Rectangleのインスタンス
	 */
	get(key: string):Phaser.Geom.Rectangle{
		return this._rectangles.get(key)
	}

	/**
	 * 引数のKeyで登録されているRectangleを削除する。
	 * @param key Rectangleを識別するためのKey
	 * @returns 削除したRectangle
	 */
	delete(key: string):Phaser.Geom.Rectangle{
		let elem = this._rectangles.get(key);
		this._rectangles.delete(key)

		return elem;
	}

	/**
	 * 中身をリセットする
	 */
	init(): void{
		this._rectangles = null;
		this._rectangles = new Map<string,Phaser.Geom.Rectangle>();
	}

	/**
	 * rectangleと、このグループに属するrectangleが重なっているか判定する。
	 * @param rectangle このグループと重なっているか判定したいrectangle
	 */
	overlap(rectangle: Phaser.Geom.Rectangle):Array<Phaser.Geom.Rectangle>|null;

	/**
	 * RectangleGroupe同士が重なっているか判定する
	 * @param rectangles 重なっているRectangleのペアを返す
	 */
	overlap(rectangles: RectangleGroupe):Array<RectanglePair>|null

	overlap(arg:any){
		
		if(arg instanceof Phaser.Geom.Rectangle){

			let overLaped_rectangles = new Array<Phaser.Geom.Rectangle>();
			let rectangle = arg as Phaser.Geom.Rectangle;

			this._rectangles.forEach((value: Phaser.Geom.Rectangle, key: string)=>{		
				if(Phaser.Geom.Intersects.RectangleToRectangle(rectangle,value)){
					overLaped_rectangles.push(value)
				}
			})

			return overLaped_rectangles.length > 0 ? overLaped_rectangles : null;

			
		}
		else if(arg instanceof RectangleGroupe){

			let overLaped_rectangles: Array<RectanglePair> = new Array<RectanglePair>();
			let arg_rectangles = arg as RectangleGroupe;

			arg_rectangles._rectangles.forEach((val1:Phaser.Geom.Rectangle,key1:string)=>{
				this._rectangles.forEach((val2:Phaser.Geom.Rectangle, key2: string)=>{
					if(Phaser.Geom.Intersects.RectangleToRectangle(val1,val2)){
						overLaped_rectangles.push({
							rect1: val1,
							rect2: val2
						})
					}
				})
			})
			
			return overLaped_rectangles.length > 0 ? overLaped_rectangles : null;

		}
		else{
			throw new Error("wrong args");
		}
	}

	/**
	 * 指定された点がRectangleGroupeに登録されているRectangle内に存在しているかを確認する
	 * @param x 点のX座標
	 * @param y 点のY座標
	 * @returns 点が含まれていたRectangle
	 */
	contains(x:number,y:number):Phaser.Geom.Rectangle[] | null{

		let containsRects:Phaser.Geom.Rectangle[] = new Array<Phaser.Geom.Rectangle>()

		this._rectangles.forEach((rect:Phaser.Geom.Rectangle)=>{
			if(rect.contains(x,y)){
				containsRects.push(rect)
			}
		})

		return containsRects.length > 0 ? containsRects : null;

	}
}

export interface RectanglePair{
	rect1:Phaser.Geom.Rectangle
	rect2:Phaser.Geom.Rectangle
}