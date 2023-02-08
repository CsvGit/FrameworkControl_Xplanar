/*
 * Generated 2/5/2023 6:14:21 PM
 * Copyright (C) 2023
 */
//@ts-ignore
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let TcHmiXplanarMover;
        (function (TcHmiXplanarMover) {
            class TcHmiXplanarMoverControl extends TcHmi.Controls.System.TcHmiControl {
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
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcHmiXplanarMover_TcHmiXplanarMoverControl-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Connect to HTML Div
                    this.__elementXplanarMoverContainer = this.__elementTemplateRoot.find('.TcHmi_Container');
                    this.__elementXplanarMoverRectangle = this.__elementTemplateRoot.find('.TcHmi_Rectangle');
                    this.__elementXplanarMoverImage = this.__elementTemplateRoot.find('.TcHmi_Image');
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                    // Mover parts
                    let strMoverFrame = this.__id + '_TcHmiMoverFrame';
                    let strMoverText = this.__id + '_TcHmiMoverText';
                    let strMoverImage = this.__id + '_TcHmiMoverImage';
                    // Create mover frame
                    let myMoverFrame = TcHmi.ControlFactory.createEx('TcHmi.Controls.System.TcHmiContainer', strMoverFrame, {
                        'data-tchmi-top': 25,
                        'data-tchmi-left': 25,
                        'data-tchmi-width': 150,
                        'data-tchmi-height': 150,
                        'data-tchmi-background-color': {
                            'color': 'rgba(113, 121, 126, 1)'
                        },
                        'data-tchmi-zindex': 5
                    }, this // Marks this control as the parent 
                    );
                    if (myMoverFrame) {
                        // Append to our DOM. This will be detected by the framework and its .__attach function will be called automatically. 
                        this.__element.append(myMoverFrame.getElement());
                    }
                    // Create mover text
                    let myMoverText = TcHmi.ControlFactory.createEx('TcHmi.Controls.Beckhoff.TcHmiTextblock', strMoverText, {
                        'data-tchmi-top': 75,
                        'data-tchmi-left': 25,
                        'data-tchmi-width': 150,
                        'data-tchmi-height': 25,
                        'data-tchmi-background-color': {
                            'color': 'rgba(113, 121, 126, 1)'
                        },
                        'data-tchmi-text-color': {
                            'color': 'rgba(255, 255, 255, 1)'
                        },
                        'data-tchmi-text': 'M1',
                        'data-tchmi-zindex': 10
                    });
                    // Add text to frame parent
                    if (myMoverText && myMoverFrame) {
                        // Append to our DOM. This will be detected by the framework and its .__attach function will be called automatically. 
                        myMoverFrame.__addChild(myMoverText);
                    }
                    // Create mover text
                    let myMoverImage = TcHmi.ControlFactory.createEx('TcHmi.Controls.Beckhoff.TcHmiImage', strMoverImage, {
                        'data-tchmi-top': 100,
                        'data-tchmi-left': 25,
                        'data-tchmi-width': 75,
                        'data-tchmi-height': 25,
                        'data-tchmi-src': 'Images/logo.png',
                        'data-tchmi-zindex': 10
                    });
                    // Add image to frame parent
                    if (myMoverImage && myMoverFrame) {
                        // Append to our DOM. This will be detected by the framework and its .__attach function will be called automatically. 
                        myMoverFrame.__addChild(myMoverImage);
                    }
                    /* Append
                    if (myObject) {
                        // Binding a symbol to an attribute after control creation
                        //Binding.createEx2('%i%bTest%/i%', 'StateSymbol', myButton);
                    }
                    */
                }
                /**
                * Is called by the system after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    // Retrieve objects
                    let myMoverFrame = TcHmi.Controls.get(this.getId() + '_TcHmiMoverFrame');
                    console.log(myMoverFrame);
                    let myMoverText = TcHmi.Controls.get(this.getId() + '_TcHmiMoverText');
                    console.log(myMoverText);
                    let myMoverImage = TcHmi.Controls.get(this.getId() + '_TcHmiMoverImage');
                    console.log(myMoverImage);
                }
                /**
                * Is called by the system after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                    // Retrieve objects
                    let myMoverFrame = TcHmi.Controls.get(this.getId() + '_TcHmiMoverFrame');
                    let myMoverText = TcHmi.Controls.get(this.getId() + '_TcHmiMoverText');
                    let myMoverImage = TcHmi.Controls.get(this.getId() + '_TcHmiMoverImage');
                    // Dynamic removal of objects
                    if (myMoverText && myMoverFrame) {
                        myMoverFrame.__removeChild(myMoverText);
                        myMoverText.destroy();
                    }
                    if (myMoverImage && myMoverFrame) {
                        myMoverFrame.__removeChild(myMoverImage);
                        myMoverImage.destroy();
                    }
                    if (myMoverFrame) {
                        // Append to our DOM. This will be detected by the framework and its .__attach function will be called automatically.
                        this.__element.remove(this.getId() + '_TcHmiMoverFrame');
                        myMoverFrame.destroy();
                    }
                }
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                }
                /**
                * Gets the value of __width
                * @returns The current value of XplanarMoverWidth
                */
                getXplanarMoverWidth() {
                    return this.__width;
                }
                /**
                * Sets the value of XplanarMoverWidth
                * @param valueNew The new value for XplanarMoverWidth
                */
                setXplanarMoverWidth(valueNew) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("XplanarMoverWidth");
                    }
                    // Save new value
                    this.__width = convertedValue;
                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getXplanarMoverWidth"]);
                }
                /**
                * Gets the value of __heigth
                * @returns The current value of XplanarMoverHeigth
                */
                getXplanarMoverHeight() {
                    return this.__width;
                }
                /**
                * Sets the value of XplanarMoverHeigth
                * @param valueNew The new value for XplanarMoverHeigth
                */
                setXplanarMoverHeight(valueNew) {
                    // Convert the value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    // When converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("XplanarMoverHeigth");
                    }
                    // Save new value
                    this.__heigth = convertedValue;
                    // Inform the system that the function has a a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getXplanarMoverHeigth"]);
                }
            }
            TcHmiXplanarMover.TcHmiXplanarMoverControl = TcHmiXplanarMoverControl;
        })(TcHmiXplanarMover = Controls.TcHmiXplanarMover || (Controls.TcHmiXplanarMover = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiXplanarMoverControl', 'TcHmi.Controls.TcHmiXplanarMover', TcHmi.Controls.TcHmiXplanarMover.TcHmiXplanarMoverControl);
//# sourceMappingURL=TcHmiXplanarMoverControl.js.map