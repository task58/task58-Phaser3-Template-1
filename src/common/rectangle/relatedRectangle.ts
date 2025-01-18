export class RelatedRectangle<T> extends Phaser.Geom.Rectangle {

	private _object: T;
	public get object(): T {return this._object}
	
	constructor(object: T,x: number = 0, y: number = 0, width: number = 0, height: number = 0){
		super(x, y, width, height)
		this._object = object;
	}

	/**
	 * ``Phaser.Geom.Rectangle``からRelatedRectangleを作成する。
	 * @param rect もとにするrect
	 * @param object 関連付けるオブジェクト
	 * @returns 
	 */
	static createFromRect<U>(rect:Phaser.Geom.Rectangle, object:U){
		return new RelatedRectangle<U>(object,rect.x,rect.y,rect.width,rect.height)
	}

	
}