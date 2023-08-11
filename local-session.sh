if [ -z "$LOOPWORMS_API_KEY" ]
  then
    echo "Missing LOOPWORMS_API_KEY environment variable"
    exit 1
fi
if [ $# -ne 4 ]; then
    echo "Usage: $0 <walletId> <nftId> <mapId> <checkpointId>"
    exit 1
fi
walletId=$1
nftId=$2
mapId=$3
checkpointId=$4
echo $walletId $nftId $mapId $checkpointId
sessionId=`curl -X POST -H "Content-Type: application/json" -H "x-api-key: $LOOPWORMS_API_KEY" -d "{\"walletId\": \"$walletId\", \"nftId\" : \"$nftId\", \"title\": \"Title 🏛️\", \"xp\":16240, \"mapId\": \"$mapId\", \"checkpointId\": \"$checkpointId\"}" http://127.0.0.1:8000/session | jq -r '.sessionId'`
url=http://127.0.0.1:8000/?sessionId=$sessionId
echo Navigate to the following URL to start playing: $url
open $url || "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" $url
