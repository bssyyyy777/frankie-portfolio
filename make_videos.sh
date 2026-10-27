#!/usr/bin/env bash
set -e
mkdir -p public/videos

create_video() {
  local img="$1"
  local out="$2"
  local dur="$3"
  
  echo "Generating $out from $img..."
  ffmpeg -y -loop 1 -t "$dur" -i "$img" \
    -f lavfi -t "$dur" -i "anullsrc=channel_layout=stereo:sample_rate=44100" \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black" \
    -c:v libx264 -preset ultrafast -crf 23 -pix_fmt yuv420p -movflags +faststart \
    -c:a aac -b:a 128k -ar 44100 \
    -shortest "$out"
}

create_video "public/assets/bts/chase_mall_shoot.png" "public/videos/01_the_chase.mp4" 10
create_video "public/assets/bts/blindspot_garage_crew.png" "public/videos/02_blind_spot.mp4" 10
create_video "public/storyboards/scwo_thrift_shop.jpg" "public/videos/03_scwo.mp4" 10
create_video "public/assets/strategy/esther/theme_unscripted_variety.png" "public/videos/04_variety.mp4" 8
create_video "public/assets/strategy/haidilao/haidilao_storefront.png" "public/videos/05_food.mp4" 8
create_video "public/assets/bts/team_reflection.png" "public/videos/06_vlog.mp4" 8

echo "All videos generated successfully."
