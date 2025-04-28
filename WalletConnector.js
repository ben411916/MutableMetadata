
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    BackpackWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles

const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new BackpackWalletAdapter(),
];

const network = 'devnet'; // Or 'mainnet-beta', 'testnet'

export default function App() {
    return (
        <ConnectionProvider endpoint={clusterApiUrl(network)}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {/* Your components here */}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
