#!/bin/bash

sleep 300 &
sleep 300 &
sleep 300 &

for i in `seq 1 10`
do
    echo "$0-$1 is running..."
    echo "$0-$1 is error..." >&2
    sleep 1
done

echo "error message" >&2
exit 12
