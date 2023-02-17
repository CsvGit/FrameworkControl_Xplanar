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
                    // Flags
                    bValid            : boolean;
                    bShowHeatmap      : boolean;
                    bShowTrack        : boolean;
                    bShowAllTracks    : boolean;
                    bClearView        : boolean;
                    bDisableMovers    : boolean;
                    // Numbers
                    nTileCount        : Number;
                    nMoverCount       : Number;
                    // Arrays
                    astComboboxTrack  : Array<any>;
                    astTileTempDist   : Array<any>;
                    astTilePositions  : Array<any>;
                    astMoverDimension : Array<any>;
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

                // HTML 
                protected __elementTemplateRoot!: JQuery;
                protected __canvasHtml: JQuery;
                protected __canvasElement: HTMLCanvasElement;

                // General params
                protected __deltaOffsetHeight: number | null = 5;
                protected __deltaOffsetWidth: number | null = 5;
                protected __circleRadius: number | null = 20;
                protected __XplanarToCanvasOffset: number | null = 0;
                protected __CanvasToXplanarOffset: number | null = 0;
                protected __maxScaleFactor: number | null = 4;
                protected __fontSize: number | null = 20;
                protected __trackSize: number | null = 8;

                // Track params
                protected __arrTrackIndex: Array<number> = [];
                protected __arrPoint: Array<any> = [];
                protected __arrPointType: Array<any> = [];
                protected __arrMarkerType: Array<any> = [];
                protected __arrMarkerColor: Array<any> = [];
                protected __arrTrackColor: Array<string> = ['blue', 'green', 'teal', 'maroon', 'orange',
                                                            'navy', ' purple', 'fuchsia', 'olive', 'pink',
                                                            'yellow', 'purple', 'black', 'gray', 'cyan',
                                                            'blue', 'green', 'teal', 'maroon', 'orange'];

                // Tile params
                protected __tileWidth: number | null = 240;
                protected __tileHeight: number | null = 240;

                // Xplanar attributes
                protected __stXplanar: TcHmiXplanar.ST_Xplanar | null;
                protected __scaleFactor: number | null;
                protected __trackIndex: number | null;
                protected __moverImageSrc: string;
                protected __moverTextColor: Color;
                protected __tileBackgroundColor: Color;
                protected __isVerticalLayout: boolean;

                // PLC
                protected __sXplanarShowTrack     : string = "%s%PLC1.GVL_HMI.stXplanar::bShowTrack%/s%";
                protected __sXplanarShowAllTracks : string = "%s%PLC1.GVL_HMI.stXplanar::bShowAllTracks%/s%";
                protected __sXplanarClearView     : string = "%s%PLC1.GVL_HMI.stXplanar::bClearTrack%/s%";
                protected __sXplanarShowHeatmap   : string = "%s%PLC1.GVL_HMI.stXplanar::bShowHeatMap%/s%";




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

                    // When converted value is null, 0 or above 4 get internal default
                    if (convertedValue === null || convertedValue < 1 || convertedValue > this.__maxScaleFactor) {
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
                * Gets the value of __isVerticalLayout
                * @returns The current value of __isVerticalLayout
                */
                public M_GetIsVerticalLayout(): boolean {
                    return this.__isVerticalLayout;
                }




                /**
                * Sets the value of __trackIndex
                * @param valueNew The new value for TrackIndex
                */
                public M_SetIsVerticalLayout(valueNew: boolean | null) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);

                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("isVerticalLayout");
                    }

                    // Save new value
                    this.__isVerticalLayout = convertedValue;

                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", ["M_GetIsVerticalLayout"]);
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

                    // Skip if no value change
                    if (tchmi_equal(convertedValue, this.__stXplanar)) {
                        // Skip processing when the value has not changed
                        return;
                    }
                    // Remember the new value
                    this.__stXplanar = convertedValue;

                    // Inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'stXplanar' });

                    // Call handle function to process the new value
                    this.M_HandleStXplanar(this.__stXplanar);
                }




                //----------------------//
                // Handle the stXplanar //
                //----------------------// 
                protected M_HandleStXplanar(__stXplanar: TcHmiXplanar.ST_Xplanar | null) {
                    // Run when defined structure and Xplanar data from NC
                    if (this.__stXplanar) {
                        if (this.__stXplanar.bValid) {
                            // Offset
                            this.M_HandleOffset(__stXplanar);

                            // Movers
                            this.M_HandleMovers(__stXplanar);

                            // Tiles 
                            this.M_HandleTiles(__stXplanar);

                            // Show Track 
                            if (this.__stXplanar.bShowTrack) {
                                this.M_ShowTrack(__stXplanar);
                            }

                            // Show all tracks 
                            if (this.__stXplanar.bShowAllTracks) {
                                this.M_ShowAllTracks(__stXplanar);
                            }

                            // Heat map
                            if (this.__stXplanar.bShowHeatmap) {
                                this.M_ShowHeatMap(__stXplanar);
                            }

                            // Clear view
                            if (this.__stXplanar.bClearView) {
                                this.M_ClearView();
                            }
                        }
                    }
                }




                //---------------//
                // Handle offset //
                //---------------//
                private M_HandleOffset(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    // Xplanar control
                    let myXplanarControl = TcHmi.Controls.get(this.__id);

                    // Canvas
                    this.__canvasElement.height = myXplanarControl.getHeight();
                    this.__canvasElement.width = myXplanarControl.getWidth();

                    // Find max Y position of tiles
                    let currentMax = 0;
                    for (let i = 0; i < __stXplanar.nTileCount; i++) {
                        if (currentMax < __stXplanar.astTilePositions[i].Y) {
                            currentMax = __stXplanar.astTilePositions[i].Y;
                        }
                    }

                    // Compute Xplanar to Canvas offset
                    this.__XplanarToCanvasOffset = this.__canvasElement.height - currentMax - this.__tileHeight;
                    if (this.__scaleFactor > 1) {
                        // Horizontal
                        this.__XplanarToCanvasOffset = this.__XplanarToCanvasOffset + this.__scaleFactor * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            this.__XplanarToCanvasOffset = this.__XplanarToCanvasOffset + this.__scaleFactor * this.__tileHeight;
                        }
                    }
                    if (this.__scaleFactor > 2) {
                        // Horizontal
                        this.__XplanarToCanvasOffset = this.__XplanarToCanvasOffset - (1 / 3) * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            this.__XplanarToCanvasOffset = this.__XplanarToCanvasOffset - (1 / 3) * this.__tileHeight;
                        }
                    }
                    if (this.__scaleFactor > 3) {
                        // Horizontal
                        this.__XplanarToCanvasOffset = this.__XplanarToCanvasOffset - (2 / 3) * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            this.__XplanarToCanvasOffset = this.__XplanarToCanvasOffset - (2 / 3) * this.__tileHeight;
                        }
                    }

                    // Compute Canvas to Xplanar offset
                    this.__CanvasToXplanarOffset = this.__XplanarToCanvasOffset;
                    if (this.__scaleFactor > 1) {
                        // Horizontal
                        this.__CanvasToXplanarOffset = this.__CanvasToXplanarOffset - this.__scaleFactor * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            this.__CanvasToXplanarOffset = this.__CanvasToXplanarOffset - this.__scaleFactor * this.__tileHeight;
                        }
                    }
                    if (this.__scaleFactor > 2) {
                        // Horizontal
                        this.__CanvasToXplanarOffset = this.__CanvasToXplanarOffset + (1 / 3) * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            this.__CanvasToXplanarOffset = this.__CanvasToXplanarOffset + (1 / 3) * this.__tileHeight;
                        }
                    }
                    if (this.__scaleFactor > 3) {
                        // Horizontal
                        this.__CanvasToXplanarOffset = this.__CanvasToXplanarOffset + (2 / 3) * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            this.__CanvasToXplanarOffset = this.__CanvasToXplanarOffset + (2 / 3) * this.__tileHeight;
                        }
                    }
                }




                //---------------//
                // Handle movers //
                //---------------//
                private M_HandleMovers(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    // Loop index
                    for (let i = 0; i < __stXplanar.nMoverCount; i++) {
                        // Mover params
                        let strMoverFrameID = this.__id + '_TcHmiMoverFrame' + String(i + 1);
                        let strMoverImageID = this.__id + '_TcHmiMoverImage' + String(i + 1);
                        let strMoverImageSrc = this.__moverImageSrc;
                        let strMoverTextID = this.__id + '_TcHmiMoverText' + String(i + 1);
                        let strMoverText = '  ' + String(i + 1) + '.';
                        let strMoverRectangleID = this.__id + '_TcHmiMoverRectangle' + String(i + 1);

                        // Dimension
                        let width = __stXplanar.astMoverDimension[i].nWidthX * (1 / this.__scaleFactor);
                        let height = __stXplanar.astMoverDimension[i].nHeightY * (1 / this.__scaleFactor);

                        // Position & rotation
                        let x = __stXplanar.astMoverInfo[i].stActualPosition.x * (1 / this.__scaleFactor) - (width / 2);
                        let y = __stXplanar.astMoverInfo[i].stActualPosition.y * (1 / this.__scaleFactor) - (height / 2);
                        let z = __stXplanar.astMoverInfo[i].stActualPosition.z * (1 / this.__scaleFactor);
                        let a = __stXplanar.astMoverInfo[i].stActualPosition.a;
                        let b = __stXplanar.astMoverInfo[i].stActualPosition.b;
                        let c = __stXplanar.astMoverInfo[i].stActualPosition.c;

                        // Alarm
                        let moverAlarm = __stXplanar.astMoverInfo[i].bError;

                        // Fetch
                        let myMoverFrame = TcHmi.Controls.get(strMoverFrameID);
                        let myMoverImage = TcHmi.Controls.get(strMoverImageID);
                        let myMoverText = TcHmi.Controls.get(strMoverTextID);
                        let myMoverRectangle = TcHmi.Controls.get(strMoverRectangleID);
                        if (myMoverFrame === undefined && myMoverImage === undefined && myMoverText === undefined && myMoverRectangle === undefined) { 
                            // Create
                            this.M_CreateMoverFrame(strMoverFrameID, x, y, width, height);
                            this.M_CreateMoverImage(strMoverImageID, strMoverImageSrc, 0, 0, width, height);
                            this.M_CreateMoverText(strMoverTextID, strMoverText, 0, 0, width, height);
                            this.M_CreateMoverRectangle(strMoverRectangleID, 0, 0, width, height);

                            // Fetch
                            myMoverFrame = TcHmi.Controls.get(strMoverFrameID);
                            myMoverImage = TcHmi.Controls.get(strMoverImageID);
                            myMoverText = TcHmi.Controls.get(strMoverTextID);
                            myMoverRectangle = TcHmi.Controls.get(strMoverRectangleID);

                            // Append to our DOM. This will be detected by the framework and its .__attach function will be called automatically. 
                            this.__element.append(myMoverFrame.getElement());
                            myMoverFrame.__addChild(myMoverImage);
                            myMoverFrame.__addChild(myMoverText);
                            myMoverFrame.__addChild(myMoverRectangle);
                        }
                        // Update
                        else {
                            // Set image
                            myMoverImage.setWidth(width);
                            myMoverImage.setHeight(height);

                            // Set text
                            myMoverText.setWidth(width);
                            myMoverText.setHeight(height);

                            // Set rectangel
                            myMoverRectangle.setWidth(width);
                            myMoverRectangle.setHeight(height);
                            if (moverAlarm) {
                                myMoverRectangle.setVisibility('Visible');
                            }
                            else {
                                myMoverRectangle.setVisibility('Collapsed');
                            }

                            // Set frame
                            myMoverFrame.setLeft(x)
                            myMoverFrame.setBottom(y + this.__XplanarToCanvasOffset);
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
                                    'blur': 4*z,
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
                // Handle tiles //
                //--------------//
                private M_HandleTiles(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    // Setup tiles
                    for (let i = 0; i < __stXplanar.nTileCount; i++) {
                        // Tile params
                        let strTileFrameID = this.__id + '_TcHmiTileFrame' + String(i + 1);

                        // Position
                        let x = __stXplanar.astTilePositions[i].X * (1 / this.__scaleFactor);
                        let y = __stXplanar.astTilePositions[i].Y * (1 / this.__scaleFactor);
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
                            myTileFrame.setBottom(y + this.__XplanarToCanvasOffset);
                            myTileFrame.setWidth(width);
                            myTileFrame.setHeight(height);
                        }
                    }
                }




                //------------//
                // Show track //
                //------------//
                private M_ShowTrack(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void { 
                    // Add track to index buffer if not included
                    if (this.__arrTrackIndex.indexOf(this.__trackIndex) === -1) {
                        this.__arrTrackIndex.push(this.__trackIndex);
                    }

                    // Sort index buffer in ascending order
                    this.__arrTrackIndex.sort();

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
                                this.__arrPoint[p].x = point.x;
                                this.__arrPoint[p].y = point.y;
                                this.__arrMarkerType[p] = markerType;
                                this.__arrMarkerColor[p] = markerColor;
                            }
                        }                   
                        // Draw
                        if (this.__arrPoint.length > 0) {
                            this.M_DrawLines(this.__arrPoint, this.__arrPointType, this.__arrMarkerType, this.__arrMarkerColor, tempTrackIndex, this.__CanvasToXplanarOffset);
                            this.__arrPoint.length = 0;
                        }
                    }
                }




                //-----------------//
                // Show all tracks //
                //-----------------//
                private M_ShowAllTracks(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    let trackCount = __stXplanar.astTrackInfo.length;

                    // Loop tracks defined
                    for (let i = 0; i < trackCount; i++) {
                        for (let p = 0; p < __stXplanar.astTrackInfo[i].astPoint.length; p++) {
                            let point = __stXplanar.astTrackInfo[i].astPoint[p];
                            let pointType = __stXplanar.astTrackInfo[i].astPointType[p];
                            let markerType = __stXplanar.astTrackInfo[i].astMarkerType[p];
                            let markerColor = __stXplanar.astTrackInfo[i].astMarkerColor[p];
                            if (!(point.x == 0 && point.y == 0)) {
                                // Set point
                                this.__arrPoint[p] = point;
                                this.__arrPointType[p] = pointType;
                                this.__arrPoint[p].x = point.x;
                                this.__arrPoint[p].y = point.y;
                                this.__arrMarkerType[p] = markerType;
                                this.__arrMarkerColor[p] = markerColor;
                            }
                        }
                        // Draw
                        if (this.__arrPoint.length > 0) {
                            this.M_DrawLines(this.__arrPoint, this.__arrPointType, this.__arrMarkerType, this.__arrMarkerColor, i, this.__CanvasToXplanarOffset);
                            this.__arrPoint.length = 0;
                        }
                    }
                }




                //------------//
                // Clear view //
                //------------//
                private M_ClearView(): void {
                    // Context
                    let ctx = this.__canvasElement.getContext("2d");
                    ctx.clearRect(0, 0, this.__canvasElement.width, this.__canvasElement.height);

                    // Empty track buffer
                    this.__arrTrackIndex = [];
                }




                //---------------//
                // Show Heat Map //
                //---------------//
                private M_ShowHeatMap(__stXplanar: TcHmiXplanar.ST_Xplanar | null): void {
                    // Loop
                    for (let i = 0; i < __stXplanar.nTileCount; i++) {
                        // Temperatures
                        let tempCenter = __stXplanar.astTileTempDist[i].TemperatureCenter;
                        let tempNorth = __stXplanar.astTileTempDist[i].TemperatureNorth;
                        let tempSouth = __stXplanar.astTileTempDist[i].TemperatureSouth;
                        let tempEast = __stXplanar.astTileTempDist[i].TemperatureEast;
                        let tempWest = __stXplanar.astTileTempDist[i].TemperatureWest;

                        // Color
                        let colorCenter = this.M_HeatMapColor(tempCenter);
                        let colorNorth = this.M_HeatMapColor(tempNorth);
                        let colorSouth = this.M_HeatMapColor(tempSouth);
                        let colorEast = this.M_HeatMapColor(tempEast);
                        let colorWest = this.M_HeatMapColor(tempWest);

                        // Offsets
                        let kDelta = 0.0625;
                        let deltaX = kDelta * this.__tileWidth * (1 / this.__scaleFactor);
                        let deltaY = kDelta * this.__tileHeight * (1 / this.__scaleFactor);
                        let deltaTileX = __stXplanar.astTilePositions[i].X * (1 / this.__scaleFactor);
                        let deltaTileY = __stXplanar.astTilePositions[i].Y * (1 / this.__scaleFactor);

                        // Center
                        let posCenter = { x: deltaTileX + 8 * deltaX, y: deltaTileY + 8 * deltaY };
                        this.M_HeatMapCircle(posCenter, colorCenter, tempCenter, this.__circleRadius * (1 / this.__scaleFactor));

                        // North
                        let posNorth = { x: deltaTileX + 8 * deltaX, y: deltaTileY + 2*deltaY }
                        this.M_HeatMapCircle(posNorth, colorNorth, tempNorth, this.__circleRadius * (1 / this.__scaleFactor));

                        // South
                        let posSouth = { x: deltaTileX + 8 * deltaX, y: deltaTileY + 14 * deltaY }
                        this.M_HeatMapCircle(posSouth, colorSouth, tempSouth, this.__circleRadius * (1 / this.__scaleFactor));

                        // East 
                        let posEast = { x: deltaTileX + 14 * deltaX, y: deltaTileY + 8 * deltaY };
                        this.M_HeatMapCircle(posEast, colorEast, tempEast, this.__circleRadius * (1 / this.__scaleFactor));

                        // West
                        let posWest = { x: deltaTileX + 2 * deltaX, y: deltaTileY + 8 * deltaY };
                        this.M_HeatMapCircle(posWest, colorWest, tempWest, this.__circleRadius * (1 / this.__scaleFactor));
                    }
                }




                //----------------//
                // Heat Map color //
                //----------------//
                private M_HeatMapColor(__tileTemperature: number): string {
                    // Inital values
                    let Ta = 0;
                    let Tb = 50;
                    let Tc = 100;

                    // Temperature conditions
                    let tempLow = (__tileTemperature >= Ta && __tileTemperature < Tb); // Green
                    let tempMid = (__tileTemperature >= Tb && __tileTemperature < Tc); // Orange
                    let tempHigh = (__tileTemperature >= Tc);                          // Red

                    // Return 
                    if (tempLow) {
                        return 'green';
                    }
                    else if (tempMid) {
                        return 'orange';
                    }
                    else if (tempHigh) {
                        return 'red';
                    }
                    else {
                        return 'green';
                    }
                }




                //-----------------//
                // Heat Map circle //
                //-----------------//
                private M_HeatMapCircle(__point: any, __colorTemperature: string, __tileTemperature : string, __radius: number): void {
                    // Context
                    let ctx = this.__canvasElement.getContext("2d");

                    // Draw
                    ctx.beginPath();
                    ctx.arc(__point.x, __point.y, __radius, 0, 2 * Math.PI);
                    ctx.strokeStyle = __colorTemperature;
                    ctx.font = String(this.__fontSize * (1 / this.__scaleFactor)) + "px Arial";
                    ctx.strokeText(String(__tileTemperature) + '°', __point.x - 3 * this.__deltaOffsetWidth * (1 / this.__scaleFactor), __point.y + this.__deltaOffsetHeight * (1 / this.__scaleFactor))
                    ctx.stroke();

                    // Restore
                    ctx.restore();
                }




                //-------------//
                // Draw method //
                //-------------//
                private M_DrawLines(__arrPoint: Array<any>, __arrPointType: Array<any>, __arrMarkerType: Array<any>, __arrMarkerColor: Array<any>, __trackIndex: number, __displayOffset: number,) {
                    // Context
                    let ctx = this.__canvasElement.getContext("2d");

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
                        console.log(__arrPointType[p]);

                        // Case
                        switch (__arrPointType[p]) {
                            // Point
                            case 1:
                                point1 = __arrPoint[p];
                                pointType1 = __arrPointType[p];
                                markerType1 = __arrMarkerType[p];
                                markerColor1 = __arrMarkerColor[p];

                                // Avoid undefined points
                                if (point1 !== undefined) {
                                    // Rescale points
                                    point1_prime = { x: point1.x * (1 / this.__scaleFactor), y: (this.__canvasElement.height - point1.y - __displayOffset) * (1 / this.__scaleFactor) };

                                    // Text field   
                                    this.M_TrackPointText(ctx, point1_prime, markerType1, __trackIndex, __displayOffset)

                                    // Draw first point
                                    this.M_TrackPoint(ctx, point1_prime, markerType1, markerColor1, __trackIndex, this.__arrTrackColor[__trackIndex]);
                                }
                                break;

                            // Line_Start
                            case 2:
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
                                    point1_prime = { x: point1.x * (1 / this.__scaleFactor), y: (this.__canvasElement.height - point1.y - __displayOffset) * (1 / this.__scaleFactor) };
                                    point2_prime = { x: point2.x * (1 / this.__scaleFactor), y: (this.__canvasElement.height - point2.y - __displayOffset) * (1 / this.__scaleFactor) };

                                    // Text field    
                                    this.M_TrackLineText(ctx, point1_prime, point2_prime, markerType1, markerType2, __trackIndex, __displayOffset)
   
                                    // Draw points
                                    this.M_TrackPoint(ctx, point1_prime, markerType1, markerColor1, __trackIndex, this.__arrTrackColor[__trackIndex]);
                                    this.M_TrackPoint(ctx, point2_prime, markerType2, markerColor2, __trackIndex, this.__arrTrackColor[__trackIndex]);

                                    // Draw line
                                    this.M_TrackLine(ctx, point1_prime, point2_prime, pointType1, pointType2, __trackIndex, this.__arrTrackColor[__trackIndex]);
                                }
                                break;

                            // Circle_Start
                            case 4:
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
                                    point1_prime = { x: point1.x * (1 / this.__scaleFactor), y: (this.__canvasElement.height - point1.y - __displayOffset) * (1 / this.__scaleFactor) };
                                    point2_prime = { x: point2.x * (1 / this.__scaleFactor), y: (this.__canvasElement.height - point2.y - __displayOffset) * (1 / this.__scaleFactor) };
                                    point3_prime = { x: point3.x * (1 / this.__scaleFactor), y: (this.__canvasElement.height - point3.y - __displayOffset) * (1 / this.__scaleFactor) };

                                    // Text field      
                                    this.M_TrackPointText(ctx, point1_prime, markerType1, __trackIndex,__displayOffset);
                                    this.M_TrackPointText(ctx, point2_prime, markerType2, __trackIndex,__displayOffset);
                                    this.M_TrackPointText(ctx, point3_prime, markerType3, __trackIndex,__displayOffset);

                                    // Draw points
                                    this.M_TrackPoint(ctx, point1_prime, markerType1, markerColor1, __trackIndex, this.__arrTrackColor[__trackIndex]);
                                    this.M_TrackPoint(ctx, point2_prime, markerType2, markerColor2, __trackIndex, this.__arrTrackColor[__trackIndex]);
                                    this.M_TrackPoint(ctx, point3_prime, markerType3, markerColor3, __trackIndex, this.__arrTrackColor[__trackIndex]);

                                    // Draw line
                                    this.M_TrackCircle(ctx, point1_prime, point2_prime, point3_prime, pointType1, pointType2, pointType3, __trackIndex, this.__arrTrackColor[__trackIndex]);
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

                // Track point
                private M_TrackPoint(__ctx: CanvasRenderingContext2D, __point: any, __markerType: string, __markerColor: number, __trackIndex: number, __trackColor: string) {
                    // Convert enumrations to string
                    let strMarkerType = __markerType;
                    let strMarkerColor = this.M_TrackPointColor(__markerColor);

                    // Default circle radius
                    let radius = this.__trackSize * (1 / this.__scaleFactor);

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




                // Track point type
                private M_TrackPointType(__pointIndex: number) : string {
                    let strResult = '';
                    // Cases
                    switch (__pointIndex) {
                        case 0:
                            strResult = 'none';
                            break;
                        case 1:
                            strResult = 'Point';
                            break;
                        case 2:
                            strResult = 'Line_Start';
                            break;
                        case 3:
                            strResult = 'Line_End';
                            break;
                        case 4:
                            strResult = 'Circle_Start';
                            break;
                        case 5:
                            strResult = 'Circle_Center';
                            break;
                        case 6:
                            strResult = 'Circle_End';
                            break;
                        default:
                            strResult = 'none';
                            break;
                    }
                    return strResult;
                }




                // Track point color
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




                // Track point text
                private M_TrackPointText(__ctx: CanvasRenderingContext2D, __point:any, __markerType: string, __trackIndex: number, __displayOffset: number) {
                    // Font type
                    __ctx.beginPath();
                    __ctx.fillStyle = 'black';
                    __ctx.font = String(this.__fontSize * (1 / this.__scaleFactor)) + 'px serif';

                    // Offset scale
                    let offsetScaleX = 6 * (1 / this.__scaleFactor);
                    let offsetScaleY = 54 * (1 / this.__scaleFactor);

                    // Offset positions
                    let posX = (__point.x * this.__scaleFactor);
                    let posY = (this.__canvasElement.height - __point.y - __displayOffset) * this.__scaleFactor;

                    // Rescale
                    if (this.__scaleFactor > 1) {
                        // Horizontal
                        posY = posY - 4 * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            posY = posY - 4 * this.__tileHeight
                        }
                    }
                    if (this.__scaleFactor > 2) {
                        // Horizontal
                        posY = posY - 8 * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            posY = posY - 8 * this.__tileHeight;
                        }
                    }
                    if (this.__scaleFactor > 3) {
                        // Horizontal
                        posY = posY - 12 * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            posY = posY - 12 * this.__tileHeight;
                        }
                    }

                    // Format
                    posX = parseFloat((posX).toFixed(2));
                    posY = parseFloat((posY).toFixed(2));

                    // Write text
                    let text = '(X: ' + String(posX) + ', Y: ' + String(posY) + ')';
                    let offsetX = __point.x + offsetScaleX;
                    let offsetY = __point.y + offsetScaleY;
                    __ctx.fillText(text, offsetX, offsetY);
                    __ctx.fillText(__markerType, offsetX, offsetY - (offsetScaleY / 2));

                    // Restore
                    __ctx.restore();
                }




                // Track line text
                private M_TrackLineText(__ctx: CanvasRenderingContext2D, __point1: any, __point2: any, __markerType1: any, __markerType2: any, __trackIndex: number, __displayOffset: number) {
                    // Convert enumration to string
                    let strType1 = __markerType1;
                    let strType2 = __markerType2;

                    // Init positions
                    let midX = (__point1.x + __point2.x) / 2;
                    let midY = (__point1.y + __point2.y) / 2;

                    // Font type
                    __ctx.beginPath();
                    __ctx.fillStyle = 'black';
                    __ctx.font = String(this.__fontSize * (1 / this.__scaleFactor)) + 'px serif';

                    // Offset scale
                    let offsetScaleX = 6 * (1 / this.__scaleFactor);
                    let offsetScaleY = 54 * (1 / this.__scaleFactor);

                    // Offset positions
                    let posX1 = __point1.x * this.__scaleFactor;
                    let posX2 = __point2.x * this.__scaleFactor;
                    let posY1 = (this.__canvasElement.height - __point1.y - __displayOffset) * this.__scaleFactor;
                    let posY2 = (this.__canvasElement.height - __point2.y - __displayOffset) * this.__scaleFactor;

                    // Rescale
                    if (this.__scaleFactor > 1) {
                        // Horizontal
                        posY1 = posY1 - 4 * this.__tileHeight
                        posY2 = posY2 - 4 * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            posY1 = posY1 - 4 * this.__tileHeight
                            posY2 = posY2 - 4 * this.__tileHeight;
                        }
                    }
                    if (this.__scaleFactor > 2) {
                        // Horizontal
                        posY1 = posY1 - 8 * this.__tileHeight;
                        posY2 = posY2 - 8 * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            posY1 = posY1 - 8 * this.__tileHeight;
                            posY2 = posY2 - 8 * this.__tileHeight;
                        }
                    }
                    if (this.__scaleFactor > 3) {
                        // Vertical
                        posY1 = posY1 - 12 * this.__tileHeight;
                        posY2 = posY2 - 12 * this.__tileHeight;
                        // Vertical
                        if (this.__isVerticalLayout) {
                            posY1 = posY1 - 12 * this.__tileHeight;
                            posY2 = posY2 - 12 * this.__tileHeight;
                        }
                    }

                    // Format
                    posX1 = parseFloat(posX1.toFixed(2));
                    posX2 = parseFloat(posX2.toFixed(2));
                    posY1 = parseFloat(posY1.toFixed(2));
                    posY2 = parseFloat(posY2.toFixed(2));

                    // Write texts
                    let text1 = '(X: ' + String(posX1) + ', Y: ' + String(posY1) + ')';
                    let text2 = '(X: ' + String(posX2) + ', Y: ' + String(posY2) + ')';
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




                //--------------//
                // Line methods //
                //--------------//

                // Track line
                private M_TrackLine(__ctx: CanvasRenderingContext2D, __point1: any, __point2: any, __pointType1: any, __pointType2: any, __trackIndex: number, __trackColor: string) {
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

                            // Rotate
                            let theta = Math.atan2((__point2.y - __point1.y), (__point2.x - __point1.x));
                            __ctx.rotate(theta);

                            // Line
                            let hyp = Math.sqrt((__point2.x - __point1.x) * (__point2.x - __point1.x) + (__point2.y - __point1.y) * (__point2.y - __point1.y));
                            let size = this.__trackSize * (1 / this.__scaleFactor);
                            __ctx.beginPath();     
                            __ctx.moveTo(0, 0);
                            __ctx.lineTo(hyp - size, 0);
                            __ctx.strokeStyle = __trackColor;
                            __ctx.stroke();

                            // Triangle
                            __ctx.fillStyle = __trackColor;
                            __ctx.beginPath();
                            __ctx.lineTo(hyp - size, size);
                            __ctx.lineTo(hyp, 0);
                            __ctx.lineTo(hyp - size, -size);
                            __ctx.fill();

                            // Restore
                            __ctx.restore();
                        }
                    }
                }


                //----------------//
                // Circle methods //
                //----------------//

                // Track circle
                private M_TrackCircle(__ctx: CanvasRenderingContext2D, __point1: any, __point2: any, __point3: any, __pointType1: any, __pointType2: any, __pointType3: any, __trackIndex: number, __trackColor: string) {
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
                        // Restore
                        __ctx.restore();
                    }
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
                                'color': 'rgba(0, 0, 0, 0)'
                            },
                            'data-tchmi-zindex': 100
                        },
                        this // Marks this control as the parent 
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
                            'data-tchmi-width': __width,
                            'data-tchmi-height': __height,
                            'data-tchmi-src': __imageSrc,
                            'data-tchmi-zindex': 110
                        }
                    );
                }

                // Mover rectangle
                private M_CreateMoverRectangle(__controlID: string, __x: number | null, __y: number | null, __width: number | null, __height: number | null) {
                    TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiRectangle',
                        __controlID,
                        {
                            'data-tchmi-top': __x,
                            'data-tchmi-bottom': __y,
                            'data-tchmi-width': __width,
                            'data-tchmi-height': __height,
                            'data-tchmi-zindex': 120,
                            'data-tchmi-background-color': {
                                'color': 'rgba(177, 18, 38, 1)'
                            }
                        }
                    );
                }

                // Mover image
                private M_CreateMoverText(__controlID: string, __text: string, __x: number | null, __y: number | null, __width: number | null, __height: number | null) {
                    TcHmi.ControlFactory.createEx(
                        'TcHmi.Controls.Beckhoff.TcHmiTextblock',
                        __controlID,
                        {
                            'data-tchmi-top': __x,
                            'data-tchmi-bottom': __y,
                            'data-tchmi-width': __width,
                            'data-tchmi-height': __height,
                            'data-tchmi-text': __text,
                            'data-tchmi-text-color': this.__moverTextColor,
                            'data-tchmi-text-font-size': this.__fontSize * (1 / this.__scaleFactor),
                            'data-tchmi-zindex': 130
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
            }
        }
    }
}
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiXplanarControl', 'TcHmi.Controls.TcHmiXplanar', TcHmi.Controls.TcHmiXplanar.TcHmiXplanarControl);
