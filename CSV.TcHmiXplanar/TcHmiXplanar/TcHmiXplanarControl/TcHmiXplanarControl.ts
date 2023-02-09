/*
 * Generated 2/5/2023 6:14:21 PM
 * Copyright (C) 2023
 */

//@ts-ignore

module TcHmi {
    export module Controls {
        export module TcHmiXplanar {

            // ST_Xplanar type in PLC
            export namespace TcHmiXplanar {
                export interface ST_Xplanar {
                    bValid            : boolean;
                    bShowHeatmap      : boolean;
                    bHideHeatmap      : boolean;
                    bGetTrack         : boolean;
                    bClearTrack       : boolean;
                    bDisableMovers    : boolean;
                    nTileCount        : Number;
                    nIndexTrack       : Number;
                    aTileTempDist     : Array<any>;
                    aTilePositions    : Array<any>;
                    astMoverDimension : Array<any>;
                    asMoverType       : Array<any>;
                    astTrackInfo      : Array<any>;
                    astMoverInfo      : Array<any>;
                }
            }

            // Create Control Class
            export class TcHmiXplanarControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);

                }
                //------------//
                // Attributes //
                //------------//

                // HTML template
                protected __elementTemplateRoot! : JQuery;
                protected __canvasHtml           : JQuery;
                protected __canvasElement        : HTMLCanvasElement;
                protected __ctx                  : CanvasRenderingContext2D;
          

                // General params
                protected __deltaOffsetHeight    : number | null = 5;
                protected __deltaOffsetWidth     : number | null = 5;
                protected __borderOffset         : number | null = 8;

                
                // Mover offsets                 
                protected __offsetMidX_APM4220   : number | null = 80.5;
                protected __offsetMidY_APM4220   : number | null = 78.5;
                protected __offsetMidX_APM4330   : number | null = 102.5;
                protected __offsetMidY_APM4330   : number | null = 99.5;
                protected __offsetMidX_APM4550   : number | null = 145.5;
                protected __offsetMidY_APM4550   : number | null = 140.5;

                // Track params
                protected __defaultWindowHeight  : number | null = 1080;
                protected __defaultCanvasHeight  : number | null = 1080;
                protected __trackSize            : number | null = 8;
                protected __arrTrackIndex        : Array<number> = [];
                protected __arrPoint             : Array<any> = [];
                protected __arrPointType         : Array<any> = [];
                protected __arrMarkerType        : Array<any> = [];
                protected __arrMarkerColor       : Array<any> = [];
                protected __arrTrackColor        : Array<string> = ['blue', 'green', 'teal', 'maroon', 'orange',
                                                                    'navy', ' purple', 'fuchsia', 'olive', 'pink',
                                                                    'yellow', 'purple', 'black', 'gray', 'cyan',
                                                                    'blue', 'green', 'teal', 'maroon', 'orange'];
                // Mover params
                protected __moverText            : string = '';

                // Tile params
                protected __tileWidth            : number | null = 240;
                protected __tileHeight           : number | null = 240;

                // Xplanar attributes
                protected __stXplanar            : TcHmiXplanar.ST_Xplanar | null;
                protected __refstXplanar         : TcHmiXplanar.ST_Xplanar | null;
                protected __scaleFactor          : number | null;
                protected __trackIndex           : number | null; 
                protected __moverImageSrc        : string;
                protected __moverTextColor       : Color;
                protected __tileBackgroundColor  : Color;

                // PLC
                protected __sXplanarGetTrack     : string = "%s%PLC1.GVL_HMI.stXplanar::bGetTrack%/s%";
                protected __sXplanarClearTrack   : string = "%s%PLC1.GVL_HMI.stXplanar::bClearTrack%/s%";


				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcHmiXplanar_TcHmiXplanarControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }

                    // Initialize html components
                    this.__canvasHtml = this.__elementTemplateRoot.find('canvas');
                    this.__canvasElement = <HTMLCanvasElement>this.__canvasHtml[0];

                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();   

                }

                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();
                }

                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                } 

                /**
                * Gets the value of __moverImageSrc
                * @returns The current value of MoverImageSrc
                */
                public M_GetMoverImageSrc(): string {
                    return this.__moverImageSrc;
                }

                /**
                * Sets the value of __moverImageSrc
                * @param valueNew The new value for MoverImageSrc
                */
                public M_SetMoverImageSrc(valueNew: string) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);

                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("MoverImageSrc");
                    }

                    // Save new value
                    this.__moverImageSrc = convertedValue;

                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", ["M_GetMoverImageSrc"]);
                }

                /**
                * Gets the value of __scaleFactor
                * @returns The current value of ScaleFactor
                */
                public M_GetScaleFactor(): Number {
                    return this.__scaleFactor;
                }

                /**
                * Sets the value of __scaleFactor
                * @param valueNew The new value for ScaleFactor
                */
                public M_SetScaleFactor(valueNew: Number) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("ScaleFactor");
                    }

                    // Save new value
                    this.__scaleFactor = convertedValue;

                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", ["M_GetScaleFactor"]);

                }

                /**
                * Gets the value of __trackIndex
                * @returns The current value of TrackIndex
                */
                public M_GetTrackIndex(): Number {
                    return this.__trackIndex;
                }

                /**
                * Sets the value of __trackIndex
                * @param valueNew The new value for TrackIndex
                */
                public M_SetTrackIndex(valueNew: Number) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("TrackIndex");
                    }

                    // Save new value
                    this.__trackIndex = convertedValue;

                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", ["M_GetTrackIndex"]);
                }

                /**
                * Gets the value of __moverTextColor
                * @returns The current value of MoverTextColor
                */
                public M_GetMoverTextColor(): Color {
                    return this.__moverTextColor;
                }

                /**
                * Sets the value of __moverTextColor
                * @param valueNew The new value for MoverTextColor
                */
                public M_SetMoverTextColor(valueNew: Color | null) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toObject<typeof valueNew>(valueNew);

                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("MoverTextColor");
                    }

                    // Save new value
                    this.__moverTextColor = convertedValue;

                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", ["M_GetMoverTextColor"]);
                }

                /**
                * Gets the value of __tileBackgroundColor
                * @returns The current value of TileBackgroundColor
                */
                public M_GetTileBackgroundColor(): Color {
                    return this.__moverTextColor;
                }

                /**
                * Sets the value of __tileBackgroundColor
                * @param valueNew The new value for TileBackgroundColor
                */
                public M_SetTileBackgroundColor(valueNew: Color | null) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toObject<typeof valueNew>(valueNew);

                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("TileBackgroundColor");
                    }

                    // Save new value
                    this.__tileBackgroundColor = convertedValue;

                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", ["M_GetTileBackgroundColor"]);
                }

                /**
                * Gets the value of __stXplanar
                * @returns The current value of stXplanar
                */
                public M_GetStXplanar(): TcHmiXplanar.ST_Xplanar {
                    return this.__stXplanar;
                }

                /**
                * Sets the value of __stXplanar
                * @param valueNew The new value for stXplanar
                */
                public M_SetStXplanar(valueNew: TcHmiXplanar.ST_Xplanar | null) {
                    // Convert the value with the value converter
                    let convertedValue = TcHmi.ValueConverter.toObject<typeof valueNew>(valueNew);

                    // Check if the converted value is valid
                    if (convertedValue === null) {
                        // If we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('stXplanar') as TcHmiXplanar.ST_Xplanar;
                    }
                    else {
                        this.__refstXplanar = convertedValue;
                    }

                    // Skip if no value change
                    if (tchmi_equal(convertedValue, this.__stXplanar)) {
                        // Skip processing when the value has not changed
                        return;
                    }
                    // Remember the new value
                    this.__stXplanar = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'stXplanar' });

                    // Call process function to process the new value
                    this.M_HandleStXplanar(this.__stXplanar);
                }

                // Process the stXplanar structure
                protected M_HandleStXplanar(__stXplanar: TcHmiXplanar.ST_Xplanar | null ) {
                    // Run when defined structure and valid tile layout
                    if (this.__stXplanar) {
                        if (this.__stXplanar.bValid) {
                            // Movers
                            this.M_HandleMovers(__stXplanar);

                            // Tiles 
                            this.M_HandleTiles(__stXplanar);

                            // Track 
                            if (this.__stXplanar.bGetTrack) {
                                TcHmi.Symbol.writeEx(this.__sXplanarGetTrack, false, function (data) { });
                                this.M_GetTrack(__stXplanar);
                            }
                            if (this.__stXplanar.bClearTrack) {
                                TcHmi.Symbol.writeEx(this.__sXplanarClearTrack, false, function (data) { });
                                this.M_ClearTrack(__stXplanar);
                            }
                            
                        }               
                    }
                }

                //---------------//
                // Process mover //
                //---------------//
                private M_HandleMovers(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    // Local params
                    let offsetWidth = this.__deltaOffsetWidth * (1 / this.__scaleFactor);
                    let offsetHeight = this.__deltaOffsetHeight * (1 / this.__scaleFactor);

                    // Loop index
                    let amountMovers = this.__stXplanar.astMoverDimension.length;
                    for (let j = 0; j < amountMovers; j++) {
                        // Mover params
                        let strMoverFrameID = this.__id + '_TcHmiMoverFrame' + String(j + 1);
                        let strMoverTextID = this.__id + '_TcHmiMoverText' + String(j + 1);
                        let strMoverTextName = this.__moverText + String(j + 1);
                        let strMoverImageID = this.__id + '_TcHmiMoverImage' + String(j + 1);
                        let strMoverImageSrc = this.__moverImageSrc;

                        // Dimension
                        let width = this.__stXplanar.astMoverDimension[j].nWidthX * (1 / this.__scaleFactor);
                        let height = this.__stXplanar.astMoverDimension[j].nHeightY * (1 / this.__scaleFactor);

                        // Quarter
                        let quarterMoverWidth = (width) * (1 / 4);
                        let quarterMoverHeight = (height) * (1 / 4);

                        // Position & rotation
                        let x = this.__stXplanar.astMoverInfo[j].stActualPosition.x * (1 / this.__scaleFactor) - (width / 2);
                        let y = this.__stXplanar.astMoverInfo[j].stActualPosition.y * (1 / this.__scaleFactor) - (height / 2);
                        let z = this.__stXplanar.astMoverInfo[j].stActualPosition.z * (1 / this.__scaleFactor);
                        let a = this.__stXplanar.astMoverInfo[j].stActualPosition.a;
                        let b = this.__stXplanar.astMoverInfo[j].stActualPosition.b;
                        let c = this.__stXplanar.astMoverInfo[j].stActualPosition.c;

                        // Append
                        let myMoverFrame = TcHmi.Controls.get(strMoverFrameID);
                        let myMoverText = TcHmi.Controls.get(strMoverTextID);
                        let myMoverImage = TcHmi.Controls.get(strMoverImageID);
                        if (myMoverFrame === undefined && myMoverText === undefined && myMoverImage === undefined) {
                            // Create
                            this.M_CreateMoverFrame(strMoverFrameID, x, y, width, height);
                            this.M_CreateMoverText(strMoverTextID, strMoverTextName, quarterMoverWidth + 2 * offsetWidth, quarterMoverHeight + 2 * offsetHeight, quarterMoverWidth, quarterMoverHeight);
                            this.M_CreateMoverImage(strMoverImageID, strMoverImageSrc, 0, 0, width, height);

                            // Get
                            myMoverFrame = TcHmi.Controls.get(strMoverFrameID);
                            myMoverText = TcHmi.Controls.get(strMoverTextID);
                            myMoverImage = TcHmi.Controls.get(strMoverImageID);

                            // Append to our DOM. This will be detected by the framework and its .__attach function will be called automatically. 
                            this.__element.append(myMoverFrame.getElement());
                            myMoverFrame.__addChild(myMoverText);
                            myMoverFrame.__addChild(myMoverImage);
                        }
                        // Update
                        else {
                            // Set 
                            myMoverFrame.setLeft(x);
                            myMoverFrame.setBottom(y);
                            myMoverFrame.setWidth(width);
                            myMoverFrame.setHeight(height);
                            myMoverFrame.setTransform([
                                {
                                    'transformType': 'Rotate',
                                    'angle': c,
                                },
                                {
                                    'transformType': 'Skew',
                                    'xAngle': a,
                                    'yAngle': b
                                }
                            ]);
                            myMoverFrame.setBoxShadow([
                                {
                                    'blur': z,
                                    'blurUnit': "px",
                                    'color': {
                                        'color': 'rgba(0,0,0,1)'
                                    },
                                    'inset': false,
                                    'offsetX': a,
                                    'offsetXUnit': 'px',
                                    'offsetY': b,
                                    'offsetYUnit': 'px',
                                    'spread': 2 * z,
                                    'spreadUnit': 'px'
                                }
                            ]);
                        }
                    }
                }

                //--------------//
                // Process tile //
                //--------------//

                private M_HandleTiles(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    let amountTiles = __stXplanar.nTileCount;
                    for (let i = 0; i < amountTiles; i++) {
                        // Tile params
                        let strTileFrameID = this.__id + '_TcHmiTileFrame' + String(i + 1);

                        // Position
                        let x = this.__stXplanar.aTilePositions[i].X;
                        let y = this.__stXplanar.aTilePositions[i].Y;
                        let width = this.__tileWidth * (1 / this.__scaleFactor);
                        let height = this.__tileHeight * (1 / this.__scaleFactor);

                        // Append
                        let myTileFrame = TcHmi.Controls.get(strTileFrameID);
                        if (myTileFrame === undefined) {
                            // Create
                            this.M_CreateTileFrame(strTileFrameID, x, y, width, height);

                            // Get
                            myTileFrame = TcHmi.Controls.get(strTileFrameID);

                            // Append to our DOM. This will be detected by the framework and its .__attach function will be called automatically. 
                            this.__element.append(myTileFrame.getElement());
                        }
                        // Update
                        else {
                            // Set 
                            myTileFrame.setLeft(x);
                            myTileFrame.setBottom(y);
                            myTileFrame.setWidth(width);
                            myTileFrame.setHeight(height);
                        }
                    }
                }

                //-----------//
                // Get track //
                //-----------//
                private M_GetTrack(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {

                    console.log(__stXplanar);

                    // Xplanar control
                    let myXplanarControl = TcHmi.Controls.get(this.__id);

                    // Set canvas after Xplanar control
                    this.__canvasElement.width = myXplanarControl.getWidth();
                    this.__canvasElement.height = myXplanarControl.getHeight();

                    // Update Context
                    this.__ctx = this.__canvasElement.getContext("2d");
                 
                    // Add track to index buffer if not included
                    if (this.__arrTrackIndex.indexOf(this.__trackIndex) === -1) {
                        this.__arrTrackIndex.push(this.__trackIndex);
                    }

                    // Sort index buffer in ascending order
                    this.__arrTrackIndex.sort();

                    // Add offset based upon current screen resolution
                    let deltaHeight = 0;
                    let heightOffset = 0;
                    let displayOffset = 0;
                    if (this.__canvasElement.height !== this.__defaultWindowHeight) {
                        // Compute relative offset for screen
                        deltaHeight = this.__defaultWindowHeight - this.__canvasElement.height;
                        this.__canvasElement.height = this.__defaultCanvasHeight - deltaHeight;
                        heightOffset = 2 * deltaHeight;
                        displayOffset = deltaHeight;
                    }
                    else {
                        // Default values
                        this.__canvasElement.height = this.__defaultCanvasHeight;
                        heightOffset = 0;
                        displayOffset = 0;
                    }

                    // Loop tracks defined
                    for (let i = 0; i < this.__arrTrackIndex.length; i++) {
                        let tempTrackIndex = this.__arrTrackIndex[i];
                        for (let p = 0; p < __stXplanar.astTrackInfo[tempTrackIndex].astPoint.length; p++) {
                            let point = __stXplanar.astTrackInfo[tempTrackIndex].astPoint[p];
                            let pointType = __stXplanar.astTrackInfo[tempTrackIndex].astPointType[p];
                            let markerType = __stXplanar.astTrackInfo[tempTrackIndex].astMarkerType[p];
                            let markerColor = __stXplanar.astTrackInfo[tempTrackIndex].astMarkerColor[p];
                            if (!(point.x == 0 && point.y == 0)) {
                                // Set point
                                this.__arrPoint[p] = point;
                                this.__arrPointType[p] = pointType;
                                // Transform from y to y'
                                this.__arrPoint[p].x = point.x;
                                this.__arrPoint[p].y = 2 * this.__canvasElement.height - point.y + heightOffset;
                                // Set type & color
                                this.__arrMarkerType[p] = markerType;
                                this.__arrMarkerColor[p] = markerColor;
                            }
                        }
                        // Draw
                        console.log(this.__ctx);
                        console.log(this.__canvasElement);
                        console.log(this.__arrPoint);

                        this.M_DrawLines(this.__ctx, this.__canvasElement, this.__arrPoint, this.__arrPointType, this.__arrMarkerType, this.__arrMarkerColor, tempTrackIndex, this.__scaleFactor, displayOffset);
                    }
                }

                // Clear track
                private M_ClearTrack(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    // Empty track array
                    this.__arrTrackIndex = [];
                    // Clear ctx
                    this.__ctx.clearRect(0, 0, this.__canvasElement.width, this.__canvasElement.height);
                }

                //-----------------------------//
                // Control Factory Api methods //
                //-----------------------------//

                // Mover frame
                private M_CreateMoverFrame(__controlID: string, __x: number | null, __y: number | null, __width: number | null, __height: number | null) {
                    TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.System.TcHmiContainer',
                        __controlID,
                        {
                            'data-tchmi-left': __x,
                            'data-tchmi-bottom': __y,
                            'data-tchmi-width': __width,
                            'data-tchmi-height': __height,
                            'data-tchmi-background-color': {
                                'color': 'rgba(145, 145, 145, 1)'
                            },
                            'data-tchmi-border-color': {
                                'color': 'rgba(0,0,0,1)'
                            },
                            'data-tchmi-zindex': 100
                        },
                        this // Marks this control as the parent 
                    );
                }

                // Mover text
                private M_CreateMoverText(__controlID: string, __controlName: string, __x: number | null, __y: number | null, __width: number | null, __height: number | null) {
                    TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                        __controlID,
                        {
                            'data-tchmi-left': __x,
                            'data-tchmi-bottom': __y,
                            'data-tchmi-width': __width,
                            'data-tchmi-height': __height,
                            'data-tchmi-background-color': {
                                'color': 'rgba(0, 0, 0, 0)'
                            },
                            'data-tchmi-text-color': this.__moverTextColor,
                            'data-tchmi-text': __controlName,
                            'data-tchmi-text-vertical-alignment': 'Center',
                            'data-tchmi-text-horizontal-alignment': 'Center',
                            'data-tchmi-text-font-size': 24 * (1 / this.__scaleFactor),
                            'data-tchmi-zindex': 120
                        }
                    );
                }

                // Mover image
                private M_CreateMoverImage(__controlID: string, __imageSrc: string, __x: number | null, __y: number | null, __width: number | null, __height: number | null) {
                    TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiImage',
                        __controlID,
                        {
                            'data-tchmi-left': __x,
                            'data-tchmi-bottom': __y,
                            'data-tchmi-width': __width - this.__borderOffset * (1 / this.__scaleFactor),
                            'data-tchmi-height': __height - this.__borderOffset * (1 / this.__scaleFactor),
                            'data-tchmi-src': __imageSrc,
                            'data-tchmi-zindex': 110
                        }
                    );
                }

                // Tile frame
                private M_CreateTileFrame(__controlID: string, __x: number | null, __y: number | null, __width: number | null, __height: number | null) {
                    TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiRectangle',
                        __controlID,
                        {
                            'data-tchmi-left': __x,
                            'data-tchmi-bottom': __y,
                            'data-tchmi-width': __width,
                            'data-tchmi-height': __height,
                            'data-tchmi-background-color': this.__tileBackgroundColor,
                            'data-tchmi-border-color': {
                                'color': 'rgba(0,0,0,1)'
                            },
                            'data-tchmi-zindex': 50
                        },
                        this // Marks this control as the parent 
                    );
                }


                //-------------//
                // Draw method //
                //-------------//
                private M_DrawLines(__ctx: any, __canvas: any, __arrPoint: Array<any>, __arrPointType: Array<any>, __arrMarkerType: Array<any>, __arrMarkerColor: Array<any>, __trackIndex: number, __scaleFactor: number, __displayOffset: number,) {
                    // Initialize temporary variables
                    let point1 = null;
                    let point2 = null;
                    let point3 = null;
                    let pointType1 = null;
                    let pointType2 = null;
                    let pointType3 = null;
                    let markerType1 = null;
                    let markerType2 = null;
                    let markerType3 = null;
                    let markerColor1 = null;
                    let markerColor2 = null;
                    let markerColor3 = null;
                    let point1_prime = null;
                    let point2_prime = null;
                    let point3_prime = null;

                    // Loop
                    for (let p = 0; p < __arrPoint.length; p++) {
                        // Cases
                        switch (__arrPointType[p]) {
                            // Single_Point
                            case 0:
                                point1 = __arrPoint[p];
                                pointType1 = __arrPointType[p];
                                markerType1 = __arrMarkerType[p];
                                markerColor1 = __arrMarkerColor[p];

                                // Avoid undefined points
                                if (point1 !== undefined) {
                                    // Rescale points
                                    point1_prime = { x: point1.x * (1 / __scaleFactor), y: point1.y * (1 / __scaleFactor) };

                                    // Text field   
                                    this.M_TrackPointText(__ctx, point1_prime, markerType1, __trackIndex, this.__trackSize, __scaleFactor, __displayOffset)

                                    // Draw first point
                                    this.M_TrackPoint(__ctx, point1_prime, markerType1, markerColor1, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor);
                                }
                                break;

                            // Line_Start
                            case 1:
                                point1 = __arrPoint[p];
                                point2 = __arrPoint[p + 1];
                                pointType1 = __arrPointType[p];
                                pointType2 = __arrPointType[p + 1];
                                markerType1 = __arrMarkerType[p];
                                markerType2 = __arrMarkerType[p + 1];
                                markerColor1 = __arrMarkerColor[p];
                                markerColor2 = __arrMarkerColor[p + 1];

                                // Avoid undefined points
                                if (point1 !== undefined && point2 !== undefined) {
                                    // Rescale points
                                    point1_prime = { x: point1.x * (1 / __scaleFactor), y: point1.y * (1 / __scaleFactor) };
                                    point2_prime = { x: point2.x * (1 / __scaleFactor), y: point2.y * (1 / __scaleFactor) };

                                    // Text field    
                                    this.M_TrackLineText(__ctx, point1_prime, point2_prime, markerType1, markerType2, __trackIndex, this.__trackSize, __scaleFactor, __displayOffset)
   
                                    // Draw points
                                    this.M_TrackPoint(__ctx, point1_prime, markerType1, markerColor1, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor);
                                    this.M_TrackPoint(__ctx, point2_prime, markerType2, markerColor2, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor)

                                    // Draw line
                                    this.M_TrackLine(__ctx, point1_prime, point2_prime, pointType1, pointType2, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor);
                                }
                                break;

                            // Line_End
                            case 2:
                                // Next index in for-statement
                                break;

                            // Circle_Start
                            case 3:
                                point1 = __arrPoint[p];
                                point2 = __arrPoint[p + 1];
                                point3 = __arrPoint[p + 2];
                                pointType1 = __arrPointType[p];
                                pointType2 = __arrPointType[p + 1];
                                pointType3 = __arrPointType[p + 2];
                                markerType1 = __arrMarkerType[p];
                                markerType2 = __arrMarkerType[p + 1];
                                markerType3 = __arrMarkerType[p + 2];
                                markerColor1 = __arrMarkerColor[p];
                                markerColor2 = __arrMarkerColor[p + 1];
                                markerColor3 = __arrMarkerColor[p + 2];

                                // Avoid undefined points
                                if (point1 !== undefined && point2 !== undefined && point3 !== undefined) {
                                    // Rescale points
                                    point1_prime = { x: point1.x * (1 / __scaleFactor), y: point1.y * (1 / __scaleFactor) };
                                    point2_prime = { x: point2.x * (1 / __scaleFactor), y: point2.y * (1 / __scaleFactor) };
                                    point3_prime = { x: point3.x * (1 / __scaleFactor), y: point3.y * (1 / __scaleFactor) };

                                    // Text field      
                                    this.M_TrackPointText(__ctx, point1_prime, markerType1, __trackIndex, this.__trackSize, __scaleFactor, __displayOffset);
                                    this.M_TrackPointText(__ctx, point2_prime, markerType2, __trackIndex, this.__trackSize, __scaleFactor, __displayOffset);
                                    this.M_TrackPointText(__ctx, point3_prime, markerType3, __trackIndex, this.__trackSize, __scaleFactor, __displayOffset);

                                    // Draw points
                                    this.M_TrackPoint(__ctx, point1_prime, markerType1, markerColor1, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor);
                                    this.M_TrackPoint(__ctx, point2_prime, markerType2, markerColor2, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor);
                                    this.M_TrackPoint(__ctx, point3_prime, markerType3, markerColor3, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor);

                                    // Draw line
                                    this.M_TrackCircle(__ctx, point1_prime, point2_prime, point3_prime, pointType1, pointType2, pointType3, __trackIndex, this.__arrTrackColor[__trackIndex], this.__trackSize, __scaleFactor);
                                }
                                break;

                            // Default
                            default:
                                break;
                        }
                    }
                }


                //----------------//
                // Point methods  //
                //----------------//
                private M_TrackPoint(__ctx: any, __point: any, __markerType: string, __markerColor: number, __trackIndex: number, __trackColor: string, __size: number, __scaleFactor: number) {
                    // Convert enumrations to string
                    let strMarkerType = __markerType;
                    let strMarkerColor = this.M_TrackPointColor(__markerColor);

                    // Default circle radius
                    let radius = __size * (1 / __scaleFactor);

                    // Draw point 
                    __ctx.beginPath();
                    __ctx.strokeStyle = strMarkerColor;
                    __ctx.fillStyle = strMarkerColor;
                    __ctx.setLineDash([]);
                    __ctx.lineWidth = 2;
                    if (!(strMarkerType.includes('STN')) && !(strMarkerType.includes('QUE'))) {
                        __ctx.arc(__point.x, __point.y, radius, 0, 2 * Math.PI, true);
                        __ctx.stroke();
                    }
                    else if (strMarkerType.includes('STN')) {
                        __ctx.arc(__point.x, __point.y, radius, 0, 2 * Math.PI, true);
                        __ctx.fill();
                    }
                    else if (strMarkerType.includes('QUE')) {
                        __ctx.arc(__point.x, __point.y, radius / 2, 0, 2 * Math.PI, true);
                        __ctx.stroke();
                        __ctx.arc(__point.x, __point.y, radius, 0, 2 * Math.PI, true);
                        __ctx.stroke();
                    }

                    // Restore
                    __ctx.restore();
                }

                private M_TrackPointType(__pointIndex: number) : string {
                    let strResult = '';
                    // Cases
                    switch (__pointIndex) {
                        case 0:
                            strResult = 'Single_Point';
                            break;
                        case 1:
                            strResult = 'Line_Start';
                            break;
                        case 2:
                            strResult = 'Line_End';
                            break;
                        case 3:
                            strResult = 'Circle_Start';
                            break;
                        case 4:
                            strResult = 'Circle_Center';
                            break;
                        case 5:
                            strResult = 'Circle_End';
                            break;
                        default:
                            strResult = 'Single_Point';
                            break;
                    }
                    return strResult;
                }

                private M_TrackPointColor(__markerIndex: number) : string {
                    let strResult = '';
                    // Cases
                    switch (__markerIndex) {
                        case 0:
                            strResult = 'red';
                            break;
                        case 1:
                            strResult = 'green';
                            break;
                        case 2:
                            strResult = 'blue';
                            break;
                        case 3:
                            strResult = 'maroon';
                            break;
                        case 4:
                            strResult = 'teal';
                            break;
                        case 5:
                            strResult = 'navy';
                            break;
                        case 6:
                            strResult = 'purple';
                            break;
                        case 7:
                            strResult = 'olive';
                            break;
                        case 8:
                            strResult = 'orange';
                            break;
                        case 9:
                            strResult = 'fuchsia';
                            break;
                        default:
                            strResult = 'red';
                            break;
                    }
                    return strResult;
                }

                private M_TrackPointText(__ctx:any, __point:any, __markerType: string, __trackIndex: number, __size: number, __scaleFactor: number, __displayOffset: number) {
                    // Font type
                    __ctx.beginPath();
                    __ctx.fillStyle = 'black';
                    __size = __size * (1 / __scaleFactor);
                    __ctx.font = String(3 * __size) + 'px serif';

                    // Offset scale
                    let offsetScaleX = 6 * (1 / __scaleFactor);
                    let offsetScaleY = 54 * (1 / __scaleFactor);
                    let midPlanarTile = 120;

                    // Write texts
                    let text = '(X: ' + String(Math.floor(__point.x) * (__scaleFactor)) + ', Y: ' + String(Math.floor(window.innerHeight - __point.y - midPlanarTile + __displayOffset) * (__scaleFactor)) + ')';
                    let offsetX = __point.x + offsetScaleX;
                    let offsetY = __point.y + offsetScaleY;
                    __ctx.fillText(text, offsetX, offsetY);
                    __ctx.fillText(__markerType, offsetX, offsetY - (offsetScaleY / 2));

                    // Restore
                    __ctx.restore();
                }

                //--------------//
                // Line methods //
                //--------------//

                private M_TrackLine(__ctx: any, __point1: any, __point2: any, __pointType1: any, __pointType2: any, __trackIndex: number, __trackColor: string, __size: number, __scaleFactor : number) {
                    // Convert enumrations to string
                    let strPointType1 = this.M_TrackPointType(__pointType1);
                    let strPointType2 = this.M_TrackPointType(__pointType2);

                    // Compute vector if p1 and p2 different
                    if (strPointType1.includes('Line') && strPointType2.includes('Line')) {
                        if (__point1.x !== __point2.x || __point1.y !== __point2.y) {
                            // Translate
                            __ctx.save();
                            __ctx.setLineDash([]);
                            __ctx.translate(__point1.x, __point1.y);

                            // Line
                            let hyp = Math.sqrt((__point2.x - __point1.x) * (__point2.x - __point1.x) + (__point2.y - __point1.y) * (__point2.y - __point1.y));
                            __ctx.beginPath();
                            __ctx.moveTo(0, 0);
                            __ctx.lineTo(hyp - __size, 0);
                            __ctx.strokeStyle = __trackColor;
                            __ctx.stroke();

                            // Triangle
                            __ctx.fillStyle = __trackColor;
                            __ctx.beginPath();
                            __ctx.lineTo(hyp - __size, __size);
                            __ctx.lineTo(hyp, 0);
                            __ctx.lineTo(hyp - __size, -__size);
                            __ctx.fill();

                            // Restore
                            __ctx.restore();
                        }
                    }
                }

                private M_TrackLineText(__ctx: any, __point1: any, __point2: any, __markerType1: any, __markerType2: any, __trackIndex: number, __size: number, __scaleFactor: number, __displayOffset: number) {
                    // Convert enumration to string
                    let strType1 = __markerType1;
                    let strType2 = __markerType2;

                    // Init positions
                    let midX = (__point1.x + __point2.x) / 2;
                    let midY = (__point1.y + __point2.y) / 2;
                    let midPlanarTile = 120;

                    // Font type
                    __ctx.beginPath();
                    __ctx.fillStyle = 'black';
                    __size = __size * (1 / __scaleFactor);
                    __ctx.font = String(3 * __size) + 'px serif';

                    // Offset scale
                    let offsetScaleX = 6 * (1 / __scaleFactor);
                    let offsetScaleY = 54 * (1 / __scaleFactor);

                    // Write texts
                    let text1 = '(X: ' + String(Math.floor(__point1.x) * (__scaleFactor)) + ', Y: ' + String(Math.floor(window.innerHeight - __point1.y - midPlanarTile + __displayOffset) * (__scaleFactor)) + ')';
                    let text2 = '(X: ' + String(Math.floor(__point2.x) * (__scaleFactor)) + ', Y: ' + String(Math.floor(window.innerHeight - __point2.y - midPlanarTile + __displayOffset) * (__scaleFactor)) + ')';
                    let offsetX1 = __point1.x + offsetScaleX;
                    let offsetY1 = __point1.y + offsetScaleY;
                    let offsetX2 = __point2.x + offsetScaleX;
                    let offsetY2 = __point2.y + offsetScaleY;
                    __ctx.fillText(text1, offsetX1, offsetY1);
                    __ctx.fillText(strType1, offsetX1, offsetY1 - (offsetScaleY / 2));
                    __ctx.fillText(String(__trackIndex), midX + offsetScaleX, midY);
                    __ctx.fillText(text2, offsetX2, offsetY2);
                    __ctx.fillText(strType2, offsetX2, offsetY2 - (offsetScaleY / 2));

                    // Restore
                    __ctx.restore();
                }

                //----------------//
                // Circle methods //
                //----------------//

                private M_TrackCircle(__ctx: any, __point1: any, __point2: any, __point3: any, __pointType1: any, __pointType2: any, __pointType3: any, __trackIndex: number, __trackColor: string, __size: number, __scaleFactor: any) {
                    // Convert enumrations to string
                    let strPointType1 = this.M_TrackPointType(__pointType1);
                    let strPointType2 = this.M_TrackPointType(__pointType2);
                    let strPointType3 = this.M_TrackPointType(__pointType3);

                    // Draw circle
                    if (strPointType1.includes('Circle') && strPointType2.includes('Circle') && strPointType3.includes('Circle')) {
                        if (__point1.x !== __point2.x !== __point3.x || __point1.y !== __point2.y !== __point3.y) {

                            // Save
                            __ctx.save();
                            __ctx.setLineDash([]);

                            // Computation
                            let deltaX = __point1.x - __point2.x;
                            let deltaY = __point1.y - __point2.y;
                            let startAngle = Math.atan2(deltaY, deltaX);
                            let endAngle = Math.atan2(__point3.y - __point2.y, __point3.x - __point2.x);
                            let radius = Math.abs(Math.sqrt(deltaX * deltaX + deltaY * deltaY));
                            __ctx.strokeStyle = __trackColor;

                            // Draw
                            if (__point1.y > __point3.y) {
                                if (__point2.x > __point1.x) {
                                    let clockWise = false;
                                    __ctx.beginPath();
                                    __ctx.arc(__point2.x, __point2.y, radius, startAngle, endAngle, clockWise);
                                    __ctx.stroke();
                                    __ctx.closePath();
                                }
                                else if (__point2.x < __point1.x) {
                                    let clockWise = true;
                                    __ctx.beginPath();
                                    __ctx.arc(__point2.x, __point2.y, radius, startAngle, endAngle, clockWise);
                                    __ctx.stroke();
                                    __ctx.closePath();
                                }
                                else {
                                    __ctx.beginPath();
                                    __ctx.moveTo(__point1.x, __point1.y);
                                    __ctx.lineTo(__point3.x, __point3.y);
                                    __ctx.stroke();
                                    __ctx.closePath();
                                }
                            }
                            else if (__point1.y < __point3.y) {
                                if (__point2.x > __point1.x) {
                                    let clockWise = true;
                                    __ctx.beginPath();
                                    __ctx.arc(__point2.x, __point2.y, radius, startAngle, endAngle, clockWise);
                                    __ctx.stroke();
                                    __ctx.closePath();
                                }
                                else if (__point2.x < __point1.x) {
                                    let clockWise = false;
                                    __ctx.beginPath();
                                    __ctx.arc(__point2.x, __point2.y, radius, startAngle, endAngle, clockWise);
                                    __ctx.stroke();
                                    __ctx.closePath();
                                }
                                else {
                                    __ctx.beginPath();
                                    __ctx.moveTo(__point1.x, __point1.y);
                                    __ctx.lineTo(__point3.x, __point3.y);
                                    __ctx.stroke();
                                    __ctx.closePath();
                                }
                            }
                            else {
                                __ctx.beginPath();
                                __ctx.moveTo(__point1.x, __point1.y);
                                __ctx.lineTo(__point3.x, __point3.y);
                                __ctx.stroke();
                                __ctx.closePath();
                            }
                        }
                    }
                    // Restore
                    __ctx.restore();
                }

            }
        }
    }
}
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiXplanarControl', 'TcHmi.Controls.TcHmiXplanar', TcHmi.Controls.TcHmiXplanar.TcHmiXplanarControl);
