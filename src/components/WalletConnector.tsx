import { ConnectButton } from '@rainbow-me/rainbowkit';

export function WalletConnector() {
  return (
    <div className="flex items-center">
      <ConnectButton 
        chainStatus="icon"
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
      />
    </div>
  );
}