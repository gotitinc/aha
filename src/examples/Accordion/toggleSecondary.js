() => (
  <Accordion style={{ maxWidth: 300 }}>
    <div className="u-marginBottomSmall u-border u-borderLighter u-backgroundWhite u-roundedMedium u-overflowHidden">
      <Accordion.Toggle eventKey="0">
        <div className="Button u-border u-borderTransparent u-backgroundLightest u-textUppercase u-flex u-alignItemsCenter u-justifyContentCenter">
          <Icon name="chatBubbles" className="u-marginRightTiny" />
          <span>Label</span>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <div className="u-borderTop u-borderTopLighter u-paddingHorizontalSmall u-roundedBottomMedium u-paddingVerticalExtraSmall u-textGray">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
      </Accordion.Collapse>
    </div>
  </Accordion>
);
