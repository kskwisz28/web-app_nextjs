import React, { useState} from "react";
import { Range, getTrackBackground } from "react-range";
import { jsx, Flex, Text, Box } from 'theme-ui'

export default function 
RangeSlider(props) {

    const STEP = props.step;
    const MIN = props.min;
    const MAX = props.max;
    const VALUE = props.value;

    const [values, setValues] = useState([VALUE ? VALUE : 1000])

    const onRangeChange = (values) => {
      setValues(values)
      props.triggerTextAnimation(values)
    }
  
    return (
        <Flex
        py={2}
        sx={{
          flexWrap: 'wrap',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <Text>
            {props.title}
        </Text>
        <Box css={{ width: '100%'}} px={[4, null, 4, 3, 2]}>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={onRangeChange}
            renderTrack={({ props, children }) => (
              <Box
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                css={{
                  ...props.style,
                  height: "3rem",
                  display: "flex",
                  width: "100%"
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "4px",
                    width: "100%",
                    borderRadius: "0.4rem",
                    background: getTrackBackground({
                      values: values,
                      colors: ["#5ca5e5", "#ccc"],
                      min: MIN,
                      max: MAX
                    }),
                    alignSelf: "center"
                  }}
                >
                  {children}
                </div>
              </Box>
            )}
            renderThumb={({ props, isDragged }) => (
              <Box
                {...props}
                css={{
                  ...props.style,
                  height: "2rem",
                  width: "2rem",
                  borderRadius: "50%",
                  backgroundColor: isDragged ? "#5ca5e5" : "#fff",
                  display: "flex",
                  border: 'none',
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 8px #AAA"
                }}
              />
            )}
          />
        </Box>
        <output style={{ marginTop: "1rem" }} id="output">
          {values[0].toLocaleString()} {props?.suffix}
        </output>
        </Flex>
    );
}