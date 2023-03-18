# Note to Hackathon Judges
## Progress during hackathon period
At the time of the hackathon deadline, LinkAlysis had these results (verifiable by the Github commit timestamps):
### Code results
* Scripts to download SPL token data and run network analytics on it. [Link](https://github.com/uncommon-insights/network_analysis)
* Script to download NFT data, the downloaded data in BSON format, and outputs of the network metrics being run on this data. [Link](https://github.com/uncommon-insights/nft_data_download)
* Pitch deck, basic frontend and backend scripts that display some of the network metrics produced in the above repos for SPL tokens and NFTs. [Link](https://github.com/uncommon-insights/Linkalysis_fullstack)

### Analysis results
The analysis done is summarized in the pitch deck. [Download link](https://github.com/uncommon-insights/Linkalysis_fullstack/raw/main/20230314_pitch_LinkAlysis_final.pptx)

The main results are as follows:
* Motivation: Fake volume is generally bad for the ecosystem, and network analytics can help uncover such fake volume. Beyond that, network analytics has shown results on other blockchains, but these analytics rarely make it to B2C products.
* We show an example of how our analytics managed to uncover a trading ring consisting of 7 addresses, when existing products only perform pairwise linking. This has potential applications in detecting wash trades.
* We show that the top 10 addresses with the highest network metrics scores are different from the top 10 addresses by standard metrics (Total volume, total transaction count), suggesting that network analytics can be a good tool for discovery / understanding the ecosystem. 

### Further notes

We understand that the hackathon evaluation can only be done on progress made during the hackathon period. However, we are committed to building out a full product and we would be happy to receive feedback on the project in its entirety (including updates post hackathon) :)

## Progress post hackathon period
This will be updated over time as progress is made!
* [Youtube video](https://www.youtube.com/watch?v=6kFaWKXq9qM), presented in front of a live audience during the hackathon but only uploaded afterwards.
* Included README for the github repos
* Better UI, see demo video [here](https://www.youtube.com/watch?v=vXY2fprT7fw)

# Usage
1. Clone the repo
```bash
git clone https://github.com/uncommon-insights/Linkalysis_fullstack.git
```
2. You must already have the computed metrics for tokens uploaded to MongoDB. If not, see the repo [here](https://github.com/uncommon-insights/network_analysis) to do so.
3. You must already have a list of NFT transactions for a trading ring uploaded to MongoDB. From the repo [here](https://github.com/uncommon-insights/nft_data_download), compute metrics or use our precomputed metrics in `timeseries/metrics.bson`. Then pick a trading ring `cluster_number` (found in the attribute `clique_member` which is an array of `(cluster_number, cluster_size)` tuples) and extract all addresses and thus NFT transactions involved in that ring.
4. Let's setup the server and install dependencies. You need to have [NodeJS](https://nodejs.org/) installed 
```bash
cd server
npm install
```
5. Open `config.env` and replace `ATLAS_URI` with your MongoDB connection string. Also edit `PORT` to one of your choice (note that this is DIFFERENT from the MongoDB/ client port!)
6. Open `routes/record.js` and edit the two `db_connect` variables to the names of your NFT and token db respectively. Also note the parameters for `db_connect.collection()` and edit them to suit your collection name within the db

7. Run the server
```bash
npm start
```

8. Now let's work on the client. Open up another terminal and go to the client folder, install dependencies.
```bash
cd client
npm install
```

9. You may need to edit the GET urls in the parameter of `fetch` in the files `src/components/NFT.jsx` and `src/components/GetInitial.jsx` to suit your server configuration

10. You may need to edit the `tName` in `src/components/Token.jsx` to your collection name for the token data.

11. Edit the image in `src/imgs/` to one you wish to display for the NFT trading ring example

12. Start the client
```bash
npm start
```

