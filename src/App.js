import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  width: 400px;
  max-width: 90vw;
`

const Button = styled.button`
  font-size: 14px;
  padding: 20px 40px;
  width: 400px;
  max-width: 90vw;
  margin: 8px 0;
`

const Counter = styled.div`
  float: right;
  font-weight: bold;
`

function App() {
  const [AhCounter, setAhCounter] = useState(0)
  const [UmCounter, setUmCounter] = useState(0)
  const [ErCounter, setErCounter] = useState(0)
  const [WellCounter, setWellCounter] = useState(0)
  const [SoCounter, setSoCounter] = useState(0)
  const [LikeCounter, setLikeCounter] = useState(0)
  const [ButCounter, setButCounter] = useState(0)
  const [RepeatsCounter, setRepeatsCounter] = useState(0)
  const [OtherCounter, setOtherCounter] = useState(0)
  return (
    <Container>
      <FormattedMessage id="Instructions" />

      <div>
        <div>
          <Button onClick={() => setAhCounter(AhCounter + 1)}>
          <FormattedMessage id="Ah" />
          <Counter>{AhCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setUmCounter(UmCounter + 1)}>
          <FormattedMessage id="Um" />
          <Counter>{UmCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setErCounter(ErCounter + 1)}>
          <FormattedMessage id="Er" />
          <Counter>{ErCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setWellCounter(WellCounter + 1)}>
          <FormattedMessage id="Well" />
          <Counter>{WellCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setSoCounter(SoCounter + 1)}>
          <FormattedMessage id="So" />
          <Counter>{SoCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setLikeCounter(LikeCounter + 1)}>
          <FormattedMessage id="Like" />
          <Counter>{LikeCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setButCounter(ButCounter + 1)}>
          <FormattedMessage id="But" />
          <Counter>{ButCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setRepeatsCounter(RepeatsCounter + 1)}>
          <FormattedMessage id="Repeats" />
          <Counter>{RepeatsCounter}</Counter>
          </Button>
        </div>
        <div>
          <Button onClick={() => setOtherCounter(OtherCounter + 1)}>
          <FormattedMessage id="Other" />
          <Counter>{OtherCounter}</Counter>
          </Button>
        </div>
      </div>
      <hr/>
      <div>
        <Button onClick={() => {
            setAhCounter(0)
            setUmCounter(0)
            setErCounter(0)
            setWellCounter(0)
            setSoCounter(0)
            setLikeCounter(0)
            setButCounter(0)
            setRepeatsCounter(0)
            setOtherCounter(0)
        }}>
          <FormattedMessage id="Clear" />
        </Button>
      </div>
    </Container>
  );
}

export default App;
