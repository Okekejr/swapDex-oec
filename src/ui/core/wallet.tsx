import { FormControl } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import {
  StackItemContainer,
  WalletConatiner,
} from "../components/pageContainer";
import { WalletSelector } from "../components/wallet-selector";
import { useMounted } from "@/hooks/useMounted";
import { ArrowDown } from "../components/icons/ArrowDown";
import { useAccount } from "wagmi";
import { useTokens } from "@/hooks/useTokens";
import { useWalletSelector } from "@/hooks/useSelector";
import { Token } from "@/types";
import { WalletInput } from "../components/walletInputs";

export const Wallet: FC = () => {
  const { tokeList } = useTokens();
  const [activeToken, setActiveToken] = useState<Token | undefined>();
  const [toToken, setToToken] = useState<Token | undefined>();
  const [max] = useState(true);
  const { hasMounted } = useMounted();
  const { isConnected } = useAccount();
  const { modal, modal1, handleClose, handleOpen, handleClose1, handleOpen1 } =
    useWalletSelector();

  useEffect(() => {
    if (tokeList && tokeList.length > 0) {
      const firstToken = tokeList.find(
        (token) =>
          token.address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      );
      setActiveToken(firstToken);
    } else {
      return;
    }
  }, [tokeList]);

  return hasMounted ? (
    <>
      <WalletConatiner>
        <form>
          <FormControl>
            <StackItemContainer>
              <WalletInput
                isOpen={modal}
                openModal={handleOpen}
                activeToken={activeToken}
                otherToken={toToken}
                setActiveToken={setActiveToken}
                onClose={handleClose}
                tokeList={tokeList}
                max={max}
              />
              <ArrowDown />
              <WalletInput
                isOpen={modal1}
                openModal={handleOpen1}
                activeToken={toToken}
                otherToken={activeToken}
                setActiveToken={setToToken}
                onClose={handleClose1}
                tokeList={tokeList}
              />

              <>
                {hasMounted ? (
                  !isConnected ? (
                    <WalletSelector
                      title="Connect Wallet"
                      backgroundColor="rgba(31, 46, 100, 0.50)"
                      border="1px solid #273977"
                      borderRadius="10px"
                      opacity="0.8"
                      width="100%"
                      height="3.5rem"
                      _hover={{ bgColor: "rgba(31, 46, 100, 0.50)" }}
                    />
                  ) : (
                    ""
                  )
                ) : null}
              </>

              <>
                {isConnected && (
                  <WalletSelector
                    title="Connect Wallet"
                    backgroundColor="rgba(31, 46, 100, 0.50)"
                    border="1px solid #273977"
                    borderRadius="10px"
                    opacity="0.8"
                    width="100%"
                    height="3.5rem"
                    _hover={{ bgColor: "rgba(31, 46, 100, 0.50)" }}
                  />
                )}
              </>
            </StackItemContainer>
          </FormControl>
        </form>
      </WalletConatiner>
    </>
  ) : null;
};
