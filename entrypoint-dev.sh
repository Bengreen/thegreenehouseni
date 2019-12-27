#!/bin/bash

echo Running as host: `hostname -i`

exec $*
