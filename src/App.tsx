
import {
  Box,



  Flex,



  Grid,
  GridItem,
  Image,

  Spacer,
} from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
 

  return (
    <>
      <Box p={8}>
        <Header />
          <Box px={{base: 0, sm: 0, md: 100, lg: 200}}>
            
            <Spacer h={10} />
            <Box>14th October 2024</Box>
            <Spacer h={10} />
            <Box>14A Trevor Terrace</Box>
            <Spacer h={5} />
            <Box>Assessment of Issues Noted on 11th September 2024</Box>
            <Spacer h={5} />
            <Box>
              Note: No allowance for materials at this stage as shadow clad
              availability and pricing is unknown.
            </Box>
            <Spacer h={10} />
  
            
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={4}
                h="100px"
                fontSize={"sm"}
                w="600px"
              >
                {/* Item */}
                <GridItem fontWeight="bold" colSpan={1}>
                  Location
                </GridItem>
                <GridItem fontWeight="bold" colSpan={2}>
                  Issue
                </GridItem>
                <GridItem fontWeight="bold" colSpan={2}>
                  Remedy
                </GridItem>
                <GridItem fontWeight="bold" colSpan={1}>
                  Cost
                </GridItem>
                <GridItem colSpan={1}>Exterior - NE</GridItem>
                <GridItem colSpan={2}>
                  It appears the cladding is to close to the membrane. 35mm is the
                  recommended clearance.
                  <Spacer h={5} />
                  <Image src="1.jpg" />
                  <Spacer h={5} />
                  <Image src="2.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                  Trim the shadow clad. It is unknown how high the membrane up-stand
                  is.
                </GridItem>
                <GridItem colSpan={1}>Charge Up</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                <GridItem colSpan={1}>Exterior - NE</GridItem>
                <GridItem colSpan={2}>
                  The gable end above the horizontal flashing appears to be
                  rotting in places.
                  <Spacer h={5} />
                  <Image src="3.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                  Replace cladding, the problem may be sourcing the shadow clad,
                  if sourced we can replace as like for like. If not and a
                  different cladding used it will have to consented.
                </GridItem>
                <GridItem colSpan={1}>$2340 + GST</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                <GridItem colSpan={1}>Exterior - NE</GridItem>
                <GridItem colSpan={2}>
                Stained glass is leaking.
                  <Spacer h={5} />
                  <Image src="4.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                Replace glass with opaque glass.
                </GridItem>
                <GridItem colSpan={1}>Done by others.</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                <GridItem colSpan={1}>Exterior - NE</GridItem>
                <GridItem colSpan={2}>
                Investigate Leak. According to client when it rains water pools by the back door.
                  <Spacer h={5} />
                  <Image src="5.jpg" />
                  <Spacer h={5} />
                  <Image src="5a.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                Possible nib and concrete sloped away from house. This timber may need replacing.
                </GridItem>
                <GridItem colSpan={1}>Charge up.</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                <GridItem colSpan={1}>Exterior - NE</GridItem>
                <GridItem colSpan={2}>
                Leaking above the apron flashing.
                  <Spacer h={5} />
                  <Image src="6.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                Replace sheets and ensure 35mm gap. A scaffold is required.
                </GridItem>
                <GridItem colSpan={1}>$2340 + GST</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                <GridItem colSpan={1}>Interior - Bathroom</GridItem>
                <GridItem colSpan={2}>
                
                  <Spacer h={5} />
                  <Image src="7.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                New Shower.
                </GridItem>
                <GridItem colSpan={1}>Installed by others.</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                <GridItem colSpan={1}>Interior - Bathroom</GridItem>
                <GridItem colSpan={2}>
                Condensation
                  <Spacer h={5} />
                  <Image src="8.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                New Extractor Fan.
                </GridItem>
                <GridItem colSpan={1}>Installed by others.</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                <GridItem colSpan={1}>Interior - Bathroom</GridItem>
                <GridItem colSpan={2}>
                Leaking onto floor when bath used.
                  <Spacer h={5} />
                  <Image src="9.jpg" />
                </GridItem>
                <GridItem colSpan={2}>
                Fix leak from underneath by removing soffit material.
                </GridItem>
                <GridItem colSpan={1}>Charge Up.
                A plumber may also be required.</GridItem>
                {/* Item */}
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                <Spacer h={5} />
                {/* Item */}
                
              </Grid>
            
          </Box>
      </Box>
        
      
      
    </>
  );
}

export default App;
